import { env } from "cloudflare:workers";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(200),
  counterpartyType: z.string().trim().min(1).max(100),
  name: z.string().trim().max(100).optional().default(""),
  title: z.string().trim().max(150).optional().default(""),
  companyWebsite: z.string().trim().max(255).optional().default(""),
  region: z.string().trim().max(100).optional().default(""),
  profileUrl: z.string().trim().max(500).optional().default(""),
  pathway: z.string().trim().max(100).optional().default(""),
  context: z.string().trim().max(2000).optional().default(""),
  honeypot: z.string().max(200).optional().default(""),
  turnstileToken: z.string().max(2048).optional().default(""),
});

type WebsiteRuntimeEnv = {
  ENQUIRY_MODE?: "preview" | "production";
  AIRTABLE_API_TOKEN?: string;
  AIRTABLE_BASE_ID?: string;
  AIRTABLE_TABLE_NAME?: string;
  TURNSTILE_SECRET_KEY?: string;
};

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  if (!token) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

function buildMessage(data: z.infer<typeof schema>): string {
  return [
    data.title ? `Title: ${data.title}` : "",
    `Counterparty type: ${data.counterpartyType}`,
    data.pathway ? `Enquiry pathway: ${data.pathway}` : "",
    data.companyWebsite ? `Company website: ${data.companyWebsite}` : "",
    data.region ? `Region: ${data.region}` : "",
    data.profileUrl ? `Professional profile: ${data.profileUrl}` : "",
    data.context ? `\nContext:\n${data.context}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const runtime = env as unknown as WebsiteRuntimeEnv;
    const production = runtime.ENQUIRY_MODE === "production";

    // Silent success for common bot-field completion; no data is transmitted.
    if (data.honeypot) return { ok: true, staging: !production };

    if (!production) {
      return { ok: true, staging: true };
    }

    const {
      AIRTABLE_API_TOKEN,
      AIRTABLE_BASE_ID,
      AIRTABLE_TABLE_NAME,
      TURNSTILE_SECRET_KEY,
    } = runtime;

    // Production is fail-closed: all external-service settings must exist.
    if (
      !AIRTABLE_API_TOKEN ||
      !AIRTABLE_BASE_ID ||
      !AIRTABLE_TABLE_NAME ||
      !TURNSTILE_SECRET_KEY
    ) {
      throw new Error("Enquiry service is not configured.");
    }

    const human = await verifyTurnstile(data.turnstileToken, TURNSTILE_SECRET_KEY);
    if (!human) throw new Error("Please complete the security check and try again.");

    const response = await fetch(
      `https://api.airtable.com/v0/${encodeURIComponent(AIRTABLE_BASE_ID)}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Subject: data.pathway
                  ? `Website — ${data.pathway}`
                  : `Website — ${data.counterpartyType}`,
                Name: data.name,
                "Company Name": data.company,
                Email: data.email,
                Message: buildMessage(data),
                "Enquiry Date": new Date().toISOString().slice(0, 10),
              },
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      // Do not log request bodies or personal information.
      throw new Error(`Enquiry service failed (${response.status}).`);
    }

    return { ok: true, staging: false };
  });

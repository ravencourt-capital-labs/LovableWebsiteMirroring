import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  subject: z.string().trim().max(200).optional().default(""),
  name: z.string().trim().min(1).max(100),
  organisation: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

const BASE_ID = "app5FxaoNtcHiprbu";
const TABLE_NAME = "WEBSITE INTERACTIONS";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const airtableKey = process.env.AIRTABLE_API_KEY;
    if (!lovableKey || !airtableKey) {
      throw new Error("Airtable connection not configured");
    }

    const url = `https://connector-gateway.lovable.dev/airtable/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": airtableKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Subject: data.subject,
              Name: data.name,
              "Company Name": data.organisation,
              Email: data.email,
              Message: data.message,
              "Enquiry Date": new Date().toISOString().split("T")[0],
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Airtable error", res.status, body);
      throw new Error(`Airtable request failed (${res.status})`);
    }

    return { ok: true };
  });
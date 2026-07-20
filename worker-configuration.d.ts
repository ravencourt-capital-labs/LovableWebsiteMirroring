declare module "cloudflare:workers" {
  export const env: {
    ENQUIRY_MODE?: "preview" | "production";
    AIRTABLE_API_TOKEN?: string;
    AIRTABLE_BASE_ID?: string;
    AIRTABLE_TABLE_NAME?: string;
    TURNSTILE_SECRET_KEY?: string;
  };
}

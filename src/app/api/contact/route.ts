import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessDescription: string;
  helpNeeded: string;
  timeSink: string;
  additionalInfo?: string;
  company?: string; // honeypot field
};

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  "name",
  "businessName",
  "email",
  "phone",
  "businessDescription",
  "helpNeeded",
  "timeSink",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: if filled in, silently pretend success to deter simple bots.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!payload[field] || String(payload[field]).trim().length === 0) {
      return NextResponse.json(
        { error: `Please fill in all required fields.` },
        { status: 400 },
      );
    }
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // NOTE: No email/CRM provider is configured yet. This is the integration
  // point for a future email service (e.g. Resend, Postmark) or CRM
  // (e.g. HubSpot). For now we log server-side so submissions aren't lost.
  console.log("[contact-form-submission]", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

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

const FIELD_LABELS: Record<keyof ContactPayload, string> = {
  name: "Name",
  businessName: "Business name",
  email: "Email",
  phone: "Phone number",
  businessDescription: "What does your business do?",
  helpNeeded: "What would you like help with?",
  timeSink: "What is currently taking up most of your time?",
  additionalInfo: "Anything else",
  company: "Company (honeypot)",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(payload: ContactPayload) {
  const rows = (
    [
      "name",
      "businessName",
      "email",
      "phone",
      "businessDescription",
      "helpNeeded",
      "timeSink",
      "additionalInfo",
    ] as const
  )
    .filter((field) => payload[field])
    .map(
      (field) => `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#0a5038;white-space:nowrap;vertical-align:top;">${FIELD_LABELS[field]}</td>
          <td style="padding:8px 12px;color:#17241d;">${escapeHtml(String(payload[field])).replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0a5038;">New discovery call enquiry</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;
}

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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Email isn't configured yet (e.g. local dev without the env var set).
    // Log server-side so submissions still aren't silently lost.
    console.warn(
      "[contact-form] RESEND_API_KEY is not set; logging submission instead of emailing it.",
    );
    console.log("[contact-form-submission]", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Invistaff Website <notifications@invistaff.com>",
      to: siteConfig.contactFormRecipient,
      replyTo: payload.email,
      subject: `New discovery call enquiry from ${payload.name} (${payload.businessName})`,
      html: buildEmailHtml(payload),
    });

    if (error) {
      console.error("[contact-form] Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact-form] Failed to send email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

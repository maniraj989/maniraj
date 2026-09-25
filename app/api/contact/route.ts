import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "manirajsharma193@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // 1. Validation: Name
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }
    if (name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Name is too long (maximum 100 characters)." },
        { status: 400 }
      );
    }

    // 2. Validation: Email
    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your email address." },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim();
    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 150) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Validation: Message
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 }
      );
    }
    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message is too long (maximum 5,000 characters)." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    // 4. Check for Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not currently configured. Please email manirajsharma193@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    // 5. Send Email via Resend
    const resend = new Resend(apiKey);

    const emailSubject = `New Portfolio Contact — ${cleanName}`;
    const textContent = `Name:\n${cleanName}\n\nEmail:\n${cleanEmail}\n\nMessage:\n${cleanMessage}`;
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111827; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="margin-top: 0; font-size: 20px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">New Portfolio Contact</h2>
        <p style="margin: 16px 0 6px 0; font-size: 13px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Name</p>
        <p style="margin: 0; font-size: 15px; font-weight: 500; color: #111827;">${escapeHtml(cleanName)}</p>
        
        <p style="margin: 16px 0 6px 0; font-size: 13px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Email</p>
        <p style="margin: 0; font-size: 15px; font-weight: 500; color: #111827;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(cleanEmail)}</a></p>
        
        <p style="margin: 16px 0 6px 0; font-size: 13px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Message</p>
        <div style="margin: 0; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap; background-color: #f9fafb; padding: 14px; border-radius: 6px; border: 1px solid #e5e7eb;">${escapeHtml(cleanMessage)}</div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0 16px 0;" />
        <p style="margin: 0; font-size: 12px; color: #9ca3af;">Sent from Maniraj Sharma Portfolio Contact Form</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: cleanEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to deliver message. Please reach out to manirajsharma193@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

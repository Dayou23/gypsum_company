import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend("re_3YQWuudw_MpAcMD5kLXqsrFRTz8XS8Xpz");
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zdiyaa23@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    return NextRequest.json({ hi: "word" });
  } catch (err) {
    return NextRequest.json({ err });
  }
}

import { ApplicationSchema } from "@/types/contact/contactFormSchema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.ZOHO_EMAIL;
const pass = process.env.ZOHO_PASSWORD;
const privateEmail = process.env.GMAIL_EMAIL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = ApplicationSchema.safeParse(body);

    if (!result.success) {
      const serverErrors = Object.fromEntries(
        result.error.issues.map((issue) => [issue.path[0], issue.message])
      );
      return NextResponse.json(
        { success: false, errors: serverErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const transporter = nodemailer.createTransport({
      service: "smtppro.zoho.in",
      host: "smtppro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: user,
      to: privateEmail,
      subject: `New message from ${name}: ${subject}`,
      text: `You have a new message from ${name} (${email}): \n\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent",
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
  try {
    const { name, email, subject, description } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtpro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: email,
      to: "milosz.lewandowski@icloud.com",
      subject,
      text: `Mail from: ${name}\nEmail: ${email}\nMessage: ${description}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    throw new NextResponse("Failed to send message", { status: 500 });
  }
}

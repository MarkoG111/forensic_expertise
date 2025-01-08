import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    debugger;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "markogacanovic111@gmail.com",
        pass: "rkvt foyn ioyz ulgk",
      },
      debug: true, // Enable debugging output
    });

    console.log("Transporter configuration:", transporter.options);

    const mailOptions = {
      from: `${name} <${email}>`,
      to: "markogacanovic111@gmail.com",
      subject: "Contact Form Submission",
      text: message,
      replyTo: email, // Sets the reply-to address
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

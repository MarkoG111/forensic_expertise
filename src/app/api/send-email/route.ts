import { NextResponse } from "next/server";
import { sendEmail } from "../../utils/send-email"; // Named import, a function that sends the email via SendGrid

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await sendEmail({ name, email, message });
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email: ", error);
      return NextResponse.json(
        { message: error.message, details: error.stack },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred.");
      return NextResponse.json(
        { message: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

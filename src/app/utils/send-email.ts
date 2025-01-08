import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailData) => {
  const msg = {
    to: "markogacanovic7@gmail.com", // Owner of website
    from: "markogacanovic111@gmail.com", // Sender email (from the contact form)
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("Greška pri slanju poruke: ", error);
    throw new Error("Neuspešno slanje poruke");
  }
};

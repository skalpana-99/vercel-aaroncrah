"use server";

import formData from "form-data";
import Mailgun from "mailgun.js";

/**
 * Server action to handle sending an email via Mailgun from the contact form
 */
export async function createContact(
  prevState: { message: string },
  incomingFormData: FormData
): Promise<{ message: string }> {

  const name = incomingFormData.get("name")?.toString().trim();
  const email = incomingFormData.get("email")?.toString().trim();
  const message = incomingFormData.get("message")?.toString().trim();
  const recaptchaToken = incomingFormData.get("recaptchaToken")?.toString();


  if (!name || !email || !message) {
    return { message: "Please fill out all fields." };
  }

  if (!recaptchaToken) {
    return { message: "Please complete the reCAPTCHA." };
  }

  const secretKey = process.env.NEXT_RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("reCAPTCHA secret key is not set");
    return { message: "Server configuration error." };
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const captchaResponse = await fetch(verificationUrl, { method: "POST" });
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      console.error("reCAPTCHA verification failed:", captchaData["error-codes"]);
      return { message: "reCAPTCHA failed. Please try again." };
    }
  } catch (e) {
    console.error("Error during reCAPTCHA verification:", e);
    return { message: "Could not verify reCAPTCHA. Check server logs." };
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
  });
  const domain = process.env.MAILGUN_DOMAIN || "";

  const emailData = {
    from: `Contact Form <noreply@${domain}>`,
    to: "sumith@surge.global",
    subject: `New Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<h1 style="font-size:17px;">New Contact Form Submission Received</h1><br /><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  };

  try {
    await mg.messages.create(domain, emailData);
    return { message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "Failed to send message. Please try again later." };
  }
}
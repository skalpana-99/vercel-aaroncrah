"use server";

import { isValidEmail } from "@/utils/helpers";

/**
 * Adds contact to MailerLite with specified group
 * @throws Error if API call fails or configuration is invalid
 */
async function addJoiner(email: string, name: string, country: string, favoriteBook: string, message: string): Promise<any> {
  const mailerliteKey = process.env.NEXT_MAILERLITE_KEY;
  const groupId = process.env.NEXT_ARC_FORM_GROUP_ID;
  if (!mailerliteKey || !groupId) {
    throw new Error("MailerLite API key or Group ID is not set");
  }

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email,
      fields: {
        name,
        country,
        favorite_book: favoriteBook,
        message,
      },
      groups: [groupId],
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${mailerliteKey}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to add contact");
  }

  return response.json();
}

/**
 * Server action to handle contact creation from form submission
 */
export async function createArcJoiner(prevState: { message: string }, formData: FormData): Promise<{ message: string }> {
  // Extract and sanitize form data
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const favoriteBook = formData.get("favorite-book")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const country = formData.get("country")?.toString().trim() || "";
  const recaptchaToken = formData.get("recaptchaToken");

  const secretKey = process.env.NEXT_RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Recaptcha secret key is not set");
  }

  // Validate inputs
  if (!name || !email || !favoriteBook || !message || !isValidEmail(email)) {
    return { message: "Please provide all required details correctly" };
  }

  if (!recaptchaToken) {
    return { message: "Please complete the Recaptcha" };
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const captchaResponse = await fetch(verificationUrl, {
      method: "POST",
    });
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return {
        message: "Recaptcha failed. Please try again.",
      };
    }
    await addJoiner(email, name, country, favoriteBook, message);
    return { message: "Message sent successfully" };
  } catch (e: any) {
    console.error("Error creating contact:", e);
    return { message: e.message || "An error occurred while sending message" };
  }
}

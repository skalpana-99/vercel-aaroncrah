'use server'

import { isValidEmail } from "@/utils/helpers";

/**
 * Adds subscriber to MailerLite
 */
async function addSubscriber(
    email: string,
    name: string,
    country: string,
): Promise<{ success: boolean; message?: string }> {
    const mailerliteKey = process.env.NEXT_MAILERLITE_KEY;
    if (!mailerliteKey) {
        throw new Error('MailerLite API key is not set');
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        body: JSON.stringify({
            email,
            fields: {
                name,
                country,
            },
            groups: ['146888835371894631'],
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mailerliteKey}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to add subscriber');
    }

    return response.json();
}

/**
 * Server action to handle subscriber creation from form submission
 */
export async function createSubscriber(
    prevState: { message: string, error: string },
    formData: FormData
): Promise<{ message: string, error: string }> {
    // Extract and sanitize form data
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const country = formData.get('country')?.toString().trim() || '';
    const recaptchaToken = formData.get("recaptchaToken");

    const secretKey = process.env.NEXT_RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        throw new Error('Recaptcha secret key is not set');
    }

    // Validate inputs
    if (!name || !email || !isValidEmail(email)) {
        return { message: "", error: 'Please provide a valid name and email' };
    }

    if (!recaptchaToken) {
        return { message: 'Please complete the Recaptcha', error: "" };
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;


    try {
        const captchaResponse = await fetch(verificationUrl, {
            method: 'POST',
        });
        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            return {
                message: 'Recaptcha failed. Please try again.',
                error: ""
            };
        }
        await addSubscriber(email, name, country);
        return { message: 'Sign up successful', error: "" };
    } catch (e: any) {
        console.error('Error creating subscriber:', e);
        return { message: e.message || 'An error occurred while subscribing', error: "" };
    }
}
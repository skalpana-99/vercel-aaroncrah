'use server'

import { isValidEmail } from "@/utils/helpers";
import nodemailer from 'nodemailer';
import { Client } from "@microsoft/microsoft-graph-client";
import { AuthorizationCodeCredential } from "@azure/identity";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

// const credential = new AuthorizationCodeCredential(
//     'common',
//     'dbd23fdb-d34a-4654-88a7-a95c53a7a258',
//     '2b18Q~U~RYEOWf7c-alN-xxrKe1xalaNtOI4Vbod',
//     'M.C503_SN1.2.U.19496467-e6b3-fb4b-cdca-ae78f923d34e',
//     'http://localhost:3000/auth',
// );
// const authProvider = new TokenCredentialAuthenticationProvider(credential, {
//     scopes: ['mail.send'],
// });



// const client = Client.initWithMiddleware({
//     authProvider, // Use initWithMiddleware instead of init
// });


// const sendMail = {
//     message: {
//         subject: 'Meet for lunch?',
//         body: {
//             contentType: 'Text',
//             content: 'The new cafeteria is open.'
//         },
//         toRecipients: [
//             {
//                 emailAddress: {
//                     address: 'kalpanabandara.info@gmail.com'
//                 }
//             }
//         ],
//     },
//     saveToSentItems: 'true'
// };

// await client.api('/me/sendMail')
//     .post(sendMail);




// const transporter = nodemailer.createTransport({
//     host: "smtp.office365.com",
//     port: 587,
//     secure: false,
//     auth: {
//         type: "OAuth2",
//         user: "kalpanabandara.info@gmail.com",
//         clientId: "dbd23fdb-d34a-4654-88a7-a95c53a7a258",
//         clientSecret: "2b18Q~U~RYEOWf7c-alN-xxrKe1xalaNtOI4Vbod",
//         refreshToken: "M.C503_BAY.0.U.-CkNseJRB5NZd9u1gF*!*Q!6OuK!ffCL32RglRV9nbPAWVF!aPtaSuOedUck5IxivE*0oD2nPCNhwJ*pDGTsLCrQ5xBUx5woX3FU3KM!SB4*ltugGKSM66!*n1nawZEEes5cKjfpSAfmBlHxJQbUB5TZasPuGNeHKhfvnqUWIwJ*QEJmb5pVpERdkbrC6*kXbz4TaRj2Rxi6!GPPc4P7N7Kc8NwA1gcxO7LMMhrU1WgjiPWTUp7sX4Ydi4quiCP7MQXfAaecRQsyLvSSnZqEXW!5YWHgqd25sG!ciDOUgO0F!2CG7QY*FZbfKEkx7rGzFpLrf6kML0OCDi9ZP62qDb8LW9D*w87fjo3tVGgkuTI3*pgv8AJPWZ3v3twVP907GKw$$",
//         accessUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
//     }
// });

// transporter.verify(function (error, success) {
//     if (error) {
//         console.error("Transporter verification failed:", error);
//     } else {
//         console.log("Nodemailer transporter is configured correctly and ready to send messages.");
//     }
// });

const transporter = nodemailer.createTransport({
    service: 'gmail',  // This automatically sets the correct host and port
    auth: {
        user: "kalpanabandara.info@gmail.com",      // Your client's Gmail address
        pass: "jzxk qfsl borb esny"  // App password generated from Google Account
    }
});


/**
 * Server action to handle contact creation from form submission
 */
export async function createContact(
    prevState: { message: string },
    formData: FormData
): Promise<{ message: string }> {
    // Extract and sanitize form data
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const country = formData.get('country')?.toString().trim() || '';
    const recaptchaToken = formData.get("recaptchaToken");

    const secretKey = process.env.NEXT_RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        throw new Error('Recaptcha secret key is not set');
    }

    // Validate inputs
    if (!name || !email || !message || !isValidEmail(email)) {
        return { message: 'Please provide all required details correctly' };
    }

    if (!recaptchaToken) {
        return { message: 'Please complete the Recaptcha' };
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
            };
        }

        const mail = transporter.sendMail({
            from: "kalpanabandara.info@gmail.com",
            to: "kalpana_99@outlook.com",
            cc: "sumith@surge.global",
            replyTo: email,
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nMessage: ${message}`,
        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return { message: 'Failed to send email' };
            }
        });
        //console.log(mail);


        //await addJoiner(email, name, country, message);
        return { message: 'Message sent successfully' };
    } catch (e: any) {
        console.error('Error creating contact:', e);
        return { message: e.message || 'An error occurred while sending message' };
    }
}
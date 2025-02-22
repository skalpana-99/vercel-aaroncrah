'use server'

export async function createSubscriber(
    prevState: { message: string; },
    formData: FormData,
): Promise<{ message: string; }> {


    const mailerliteKey = process.env.NEXT_MAILERLITE_KEY;

    const name = formData.get('name');
    const email = formData.get('email');
    const country_name = formData.get('country');

    if (!name || !email) {
        return { message: 'Please provide a valid name and email' }
    }

    let data;

    try {
        // Create a new subscriber
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                fields: {
                    name: name,
                    country: country_name,
                },
                groups: ['146888835371894631'], // Newsletter group
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + mailerliteKey
            }
        });
        data = await response.json();

    } catch (e) {
        console.log(e);
        return { message: 'An error occured' }

    }

    return { message: "sign up successfull." }
}
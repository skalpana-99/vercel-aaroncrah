'use server'

export async function createContact(
    prevState: { message: string; },
    formData: FormData,
): Promise<{ message: string; }> {


    const mailerliteKey = process.env.NEXT_MAILERLITE_KEY;

    const name = formData.get('name');
    const email = formData.get('email');
    const fav_book = formData.get('favorite-book');
    const message = formData.get('message');
    const country_name = formData.get('country');

    if (!name || !email || !fav_book || !message) {
        return { message: 'Please provide the correct details.' }
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
                    favorite_book: fav_book,
                    message: message
                },
                groups: ['145654637054133371'], // subscribers group
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + mailerliteKey
            }
        });
        data = await response.json();

    } catch (e) {
        console.log(e);
        return { message: 'An error occured.' }

    }

    return { message: "Message sent successfully." }
}
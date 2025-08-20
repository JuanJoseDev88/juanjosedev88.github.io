export function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
    const statusElement = document.querySelector('.form-status') as HTMLParagraphElement;

    if (contactForm) {
        contactForm.addEventListener('submit', async (e: Event) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusElement.textContent = 'Thanks for your submission!';
                    statusElement.style.color = 'green';
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
                        statusElement.textContent = responseData["errors"].map((error: any) => error["message"]).join(", ");
                    } else {
                        statusElement.textContent = 'Oops! There was a problem submitting your form';
                    }
                    statusElement.style.color = 'red';
                }
            } catch (error) {
                statusElement.textContent = 'Oops! There was a problem submitting your form';
                statusElement.style.color = 'red';
            }
        });
    }
}
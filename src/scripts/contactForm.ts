export function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
    const statusElement = document.querySelector('.form-status') as HTMLParagraphElement;

    if (contactForm) {
        contactForm.addEventListener('submit', async (e: Event) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const data = new FormData(form);

            // Show loading state
            statusElement.textContent = 'Sending message...';
            statusElement.style.color = '#0066cc';

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                // Log response for debugging
                console.log('Response status:', response.status);
                console.log('Response ok:', response.ok);
                
                if (response.ok) {
                    const result = await response.json();
                    console.log('Response data:', result);
                    
                    if (result.success) {
                        statusElement.textContent = 'Thanks for your message! I\'ll get back to you soon.';
                        statusElement.style.color = 'green';
                        form.reset();
                    } else {
                        statusElement.textContent = result.message || 'There was an issue with your submission';
                        statusElement.style.color = 'red';
                    }
                } else {
                    const errorText = await response.text();
                    console.log('Error response:', errorText);
                    statusElement.textContent = `Error: ${response.status} - Please try again`;
                    statusElement.style.color = 'red';
                }
            } catch (error) {
                console.error('Form submission error:', error);
                statusElement.textContent = 'Network error - Please check your connection and try again';
                statusElement.style.color = 'red';
            }
        });
    }
}
// formLogic.js
export function handleContact() {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    if (!form || !msg) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        msg.textContent = '';
        const data = new FormData(form);
        if (!data.get('name') || !data.get('email')) {
            msg.textContent = 'Completá nombre y email.';
            return;
        }
        try {
            const response = await fetch('https://formspree.io/f/mvgbjydy', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: data
            });
            if (response.ok) {
                msg.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
                form.reset();
            } else {
                msg.textContent = 'Hubo un error al enviar. Probá de nuevo o escribime por WhatsApp.';
            }
        } catch (error) {
            msg.textContent = 'Error de conexión. Intentá más tarde o escribime por WhatsApp.';
        }
    });
}

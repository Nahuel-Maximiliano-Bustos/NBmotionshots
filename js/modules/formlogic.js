// formLogic.js
export function handleContact() {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    if (!form || !msg) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        if (!data.name || !data.email) {
            msg.textContent = 'Completá nombre y email.';
            return;
        }
        const body = encodeURIComponent(
            `Nombre: ${data.name}\nEmail: ${data.email}\nTipo: ${data.type}\nCiudad: ${data.city}\nMensaje: ${data.message}`
        );
    const mailto = `mailto:nbmotionshots@gmail.com?subject=Nuevo%20contacto%20desde%20la%20web&body=${body}`;
        window.location.href = mailto;
    msg.textContent = '¡Gracias! Abrí tu email para enviar el mensaje o escribime por WhatsApp al 3513400356.';
        form.reset();
    });
    // Para migrar a Formspree/Netlify Forms: reemplazar el handler JS por action="https://formspree.io/f/tu-id" method="POST" y quitar JS.
}

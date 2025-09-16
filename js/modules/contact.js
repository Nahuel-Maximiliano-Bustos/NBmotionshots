export const Contact = () => `
<section id="contacto" class="min-h-screen flex flex-col justify-center" aria-labelledby="contacto-title">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-10">
      <div>
        <h2 id="contacto-title" class="font-display text-4xl md:text-5xl text-brand drop-shadow-sm">Contacto</h2>
        <p class="mt-3 text-white/80 leading-relaxed">
          Contame sobre tu auto, fechas y la estética que buscás.
          <span class="text-white/70">Respondo en el día.</span>
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="rounded-full px-3 py-1 text-xs font-semibold bg-white/5 ring-1 ring-white/10 text-white/70">Cupos limitados</span>
          <span class="rounded-full px-3 py-1 text-xs font-semibold bg-white/5 ring-1 ring-white/10 text-white/70">Seguimiento 7 días</span>
          <span class="rounded-full px-3 py-1 text-xs font-semibold bg-white/5 ring-1 ring-white/10 text-white/70">Worldwide</span>
        </div>

        <div class="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

        <div class="mt-6 space-y-3 text-white/80">
          <p>📍 Córdoba, Argentina — <span class="text-white/70">Worldwide</span></p>
          <p>✉️ <a class="underline text-white hover:text-brand transition-colors" href="mailto:nbmotionshots@gmail.com">nbmotionshots@gmail.com</a></p>
          <p>📱 <a class="underline text-white hover:text-brand transition-colors" href="https://wa.me/5493513400356" target="_blank" rel="noopener">WhatsApp directo</a></p>
          <p>📸 <a class="underline text-white hover:text-brand transition-colors" href="https://instagram.com/nbmotionshots" target="_blank" rel="noopener">@nbmotionshots</a></p>
        </div>

        <p class="text-xs text-white/50 mt-6">Tu información se usa solo para responder tu consulta. Sin spam, jamás.</p>
      </div>

      <!-- FORM: solo clases Tailwind puras, sin custom CSS -->
      <form id="contactForm" class="space-y-4 p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm" novalidate>
        <div>
          <label class="block text-sm text-white/70" for="name">Nombre</label>
          <input id="name" name="name" required autocomplete="name"
                 class="mt-1 w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none transition-colors"
                 placeholder="Tu nombre" />
        </div>

        <div>
          <label class="block text-sm text-white/70" for="email">Email</label>
          <input id="email" type="email" name="email" required autocomplete="email"
                 class="mt-1 w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none transition-colors"
                 placeholder="tu@email.com" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-white/70" for="type">Tipo</label>
            <select id="type" name="type" class="mt-1 w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none transition-colors">
              <option>Sesión privada</option>
              <option>Cobertura de evento</option>
              <option>Contenido para marca</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-white/70" for="city">Ciudad</label>
            <input id="city" name="city"
                   class="mt-1 w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none transition-colors"
                   placeholder="Ciudad" />
          </div>
        </div>

        <div>
          <label class="block text-sm text-white/70" for="message">Mensaje</label>
          <textarea id="message" name="message" rows="4"
                    class="mt-1 w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none transition-colors"
                    placeholder="Contame sobre tu auto, fechas, ideas…"></textarea>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <button class="flex-1 px-6 py-3 rounded bg-brand text-black font-semibold shadow-glow hover:bg-accent focus-visible:bg-accent transition-colors" aria-label="Enviar formulario">
            Enviar
          </button>
          <a href="https://wa.me/5493513400356?text=Hola%20NB%20Motion%20Shots!%20Quiero%20reservar%20una%20sesión."
             target="_blank" rel="noopener"
             class="flex-1 text-center px-6 py-3 rounded border border-brand text-brand hover:bg-brand/10 transition-colors">
            Hablar por WhatsApp
          </a>
        </div>

        <p id="formMsg" class="text-sm text-white/70" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>


</section>
`;

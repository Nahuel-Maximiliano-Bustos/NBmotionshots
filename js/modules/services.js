export const Services = () => `
<section id="servicios" class="relative min-h-screen flex flex-col justify-center" aria-labelledby="servicios-title">
  <div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand/10 to-transparent"></div>

  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="flex items-end justify-between gap-6">
      <div>
        <h2 id="servicios-title" class="font-display text-4xl md:text-5xl text-brand">Servicios & Paquetes</h2>
        <p class="text-white/70 mt-3">Elegí un punto de partida y lo ajustamos a tu idea, locación y tiempos.</p>
      </div>
      <span class="text-white/40 text-sm hidden md:block">*Valores orientativos — viáticos/locaciones especiales se cotizan aparte</span>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6 mt-10">
      ${Card(
        'Básico',
        '10 fotos editadas · digital',
        'Book inicial del auto, listo para redes.',
        25000,
        [
          '1 locación (Córdoba ciudad)',
          '45–60 min de sesión',
          'Entrega en 72 h hábiles · 1 revisión'
        ]
      )}
      ${Card(
        'Analógico+',
        '10 digitales + 4 instantáneas',
        'Recuerdo físico + entrega digital en calidad web.',
        30000,
        [
          '1 locación · 60–75 min',
          '4 instantáneas físicas (tipo polaroid)',
          'Edición base + color grading suave'
        ]
      )}
      ${Card(
        'Extendido',
        '20 fotos editadas · digital',
        'Cobertura completa con más variantes de ángulos y escenas.',
        40000,
        [
          '2 locaciones cercanas',
          '90–120 min · interior/exterior (+ rolling shots si aplica)',
          'Entrega en 72 h hábiles · 2 revisiones'
        ],
        true
      )}
    </div>

    <!-- Callout: Paquete a medida -->
    <div class="mt-10">
      <div class="relative rounded-2xl bg-ink/5 ring-1 ring-brand/25 p-6 md:p-7">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <!-- Texto -->
          <div class="max-w-3xl">
            <div class="flex items-center gap-3">
              <span class="inline-grid h-10 w-10 place-items-center rounded-lg bg-brand/15 ring-1 ring-brand/40 text-brand">
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9 4l-2.1-.8a7 7 0 00-.6-1.5l1.2-2-1.9-1.9-2 1.2c-.5-.3-1-.5-1.5-.6L12 3l-1 .1-1 .1-.8 2.1c-.5.1-1 .3-1.5.6l-2-1.2-1.9 1.9 1.2 2c-.3.5-.5 1-.6 1.5L3 12l.1 1 .1 1 2.1.8c.1.5.3 1 .6 1.5l-1.2 2 1.9 1.9 2-1.2c.5.3 1 .5 1.5.6L12 21l1-.1 1-.1.8-2.1c.5-.1 1-.3 1.5-.6l2 1.2 1.9-1.9-1.2-2c.3-.5.5-1 .6-1.5L21 12l-.1-1-.1-1z"/>
                </svg>
              </span>
              <h3 class="text-lg md:text-xl font-semibold text-brand">Paquete a medida</h3>
            </div>

            <p class="mt-2 text-sm md:text-base text-white/80">
              Para <span class="text-white/90">eventos, marcas o pedidos especiales</span>.
              Definimos objetivo, locación; armamos cronograma y entregas.
              <span class="text-white/70">Cotización en 24 h.</span>
            </p>

            <ul class="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
              <li class="rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10">Presupuesto claro</li>
              <li class="rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10">Equipo & seguros</li>
              <li class="rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10">Entrega 72&nbsp;h</li>
            </ul>
          </div>

          <!-- Acciones -->
          <div class="flex gap-3">
            <a href="#contacto"
               class="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink shadow-glow hover:bg-accent focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-accent transition"
               aria-label="Escribime para armar un paquete a medida">
              Escribime
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/5493513400356?text=Hola%20NB%20Motion%20Shots!%20Quiero%20un%20paquete%20a%20medida."
               target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 rounded-lg px-5 py-3 ring-1 ring-brand/40 text-brand hover:bg-brand/10 focus-visible:ring-brand transition"
               aria-label="Contactar por WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

function Card(title, subtitle, description, price, features = [], highlighted = false) {
  return `
  <article class="p-6 rounded-xl ${highlighted ? 'bg-brand/10 ring-1 ring-brand/40' : 'bg-ink/5 ring-1 ring-brand/20'} backdrop-blur card-tilt" data-animate${highlighted ? ' data-delay=100' : ''}>
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-semibold text-xl text-brand">${title}</h3>
      ${highlighted ? '<span class="text-xs px-2 py-1 rounded bg-accent text-ink font-semibold">Recomendado</span>' : ''}
    </div>

    <p class="text-white/85">${subtitle}</p>
    <p class="text-white/70 text-sm mt-2">${description}</p>

    ${features && features.length ? `
      <ul aria-label="Incluye" class="mt-4 space-y-1.5 text-white/80 text-sm">
        ${features.map(f => `
          <li class="flex items-start gap-2">
            <svg viewBox="0 0 24 24" class="mt-[2px] h-4 w-4 text-brand" fill="currentColor" aria-hidden="true">
              <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"/>
            </svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    ` : ''}

    <div class="mt-6 flex items-baseline gap-2">
      <span class="text-3xl font-display text-white">$${price.toLocaleString('es-AR')}</span>
      <span class="text-white/60 text-sm">ARS</span>
    </div>

    <a href="#contacto" class="mt-6 inline-block w-full text-center px-5 py-3 rounded bg-brand text-ink font-semibold shadow-glow hover:bg-accent focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-accent transition" aria-label="Quiero ${title}">
      Quiero este
    </a>
  </article>`;
}

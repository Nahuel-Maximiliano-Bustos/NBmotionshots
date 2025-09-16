export const FAQ = () => `
<section id="faq"
  class="relative overflow-hidden w-full min-h-[100svh] py-12 md:py-16"
  aria-labelledby="faq-title">

  <!-- Fondo (cubre toda la sección) -->
  <div aria-hidden="true" class="absolute inset-0 z-0">
    <img
      src="../assets/desktop-wallpaper-bmw-headlights-at-the-dark-ultra-wide-tv-bmw-logo.jpg"
      alt="BMW wallpaper"
      class="h-full w-full object-cover"
      style="object-position:center;"
      loading="lazy"
    />
    <!-- Overlay para contraste + fades para fundir con secciones vecinas -->
    <div class="absolute inset-0 bg-black/65"></div>
    <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/40 to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
  </div>

  <!-- Contenido (centrado verticalmente dentro del viewport) -->
  <div class="relative z-10 mx-auto max-w-5xl px-6 min-h-[inherit] flex flex-col justify-center">
    <h2 id="faq-title" class="font-display text-3xl md:text-4xl text-brand drop-shadow-sm">
      Preguntas frecuentes
    </h2>

    <div class="mt-8 space-y-4">
      ${QA('¿Cuánto tardan en entregarse?', 'Entre 3 y 7 días hábiles, según la cantidad y complejidad de la sesión. Para eventos grandes, coordinamos entregas parciales.', 0)}
      ${QA('¿Dónde realizan sesiones?', 'En Córdoba y alrededores. También viajamos: Argentina / Worldwide (consultar viáticos).', 1)}
      ${QA('¿Puedo pedir un estilo de edición?', 'Sí. Si tenés referencias, las tomamos en cuenta y adaptamos el set de edición.', 2)}
      ${QA('¿Cómo reservo?', 'Completá el formulario o escribinos por WhatsApp. Respondemos en el día.', 3)}
    </div>
  </div>
</section>

<style>
  /* Limpio el marcador nativo del summary para un look prolijo */
  #faq summary::-webkit-details-marker { display: none; }
  #faq summary::marker { content: ""; }
</style>
`;

function QA(q, a, idx) {
  return `
  <details
    class="group rounded-xl ring-1 ring-neutral-800/70 bg-white/5 backdrop-blur-sm transition
           hover:ring-brand/40 focus-within:ring-brand/50"
    data-animate data-delay="${idx * 100}">
    <summary
      class="flex items-center justify-between gap-3 cursor-pointer p-4 md:p-5 text-left
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40
             focus-visible:ring-offset-2 focus-visible:ring-offset-black">
      <span class="font-semibold text-brand">${q}</span>
      <span
        class="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-brand/30
               bg-brand/15 text-brand transition-transform duration-300 group-open:rotate-45">
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M11 5h2v14h-2zM5 11h14v2H5z"/>
        </svg>
      </span>
    </summary>

    <!-- Apertura suave (no rompe el layout) -->
    <div class="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300 px-4 md:px-5 pb-4 md:pb-5">
      <div class="overflow-hidden">
        <p class="pt-3 border-t border-white/10 text-text/80">${a}</p>
      </div>
    </div>
  </details>`;
}

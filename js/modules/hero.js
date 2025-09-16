export const Hero = () => `
<section id="inicio" class="relative min-h-screen flex flex-col justify-center overflow-hidden" role="banner" aria-label="Hero NB Motion Shots">
  <!-- Video de fondo -->
  <video class="absolute inset-0 w-full h-full object-cover z-0" src="/assets/158316-816359649.mp4" autoplay loop muted playsinline preload="auto" aria-hidden="true"></video>
  <div class="absolute inset-0 z-10 pointer-events-none select-none bg-black/40"></div>
  <div class="absolute inset-0 z-20">
    <canvas id="speedLines" class="w-full h-full block absolute inset-0" aria-hidden="true"></canvas>
  </div>
  <!-- Mosaico de marcas eliminado -->
  <div class="relative z-40 max-w-7xl mx-auto w-full px-6 pb-16">
    <p class="uppercase tracking-[0.3em] text-xs md:text-sm text-white/70">Respuesta en el día · Córdoba · Argentina / Worldwide</p>
    <h1 class="font-display text-5xl md:text-7xl leading-tight mt-4">
      Velocidad convertida <span class="text-brand">en arte</span>
    </h1>
    <p class="mt-4 max-w-2xl text-white/80">
      Sesiones privadas, cobertura de eventos y contenido para marcas. Movimiento, estilo y edición profesional.
    </p>
    <div class="mt-8 flex flex-col sm:flex-row gap-4">
      <a href="#contacto" id="ctaMagnet" class="px-6 py-3 rounded bg-brand text-ink font-semibold shadow-glow hover:bg-accent focus-visible:bg-accent transition relative overflow-hidden" aria-label="Reservar fecha">
        Reservar fecha
        <span class="absolute inset-0 pointer-events-none" id="ctaHalo"></span>
      </a>
      <a href="#servicios" class="px-6 py-3 rounded ring-1 ring-brand/40 hover:bg-brand/10 focus-visible:ring-brand text-brand">Ver servicios</a>
    </div>
  </div>
</section>
`;

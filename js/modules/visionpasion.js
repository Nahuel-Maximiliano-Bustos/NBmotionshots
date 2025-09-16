export const VisionPasion = () => `
<section id="vision-pasion" class="relative overflow-hidden py-14 md:py-16">
  <!-- Fondos sutiles más chicos -->
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-20">
    <div class="absolute -top-16 -left-20 h-52 w-52 rounded-full bg-gradient-to-tr from-yellow-500/25 to-yellow-300/10 blur-3xl"></div>
    <div class="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-500/20 to-yellow-300/5 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-6">
    <header class="max-w-3xl">
      <h2 class="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-tight drop-shadow-sm">
        Visión & Pasión
      </h2>
      <p class="mt-2.5 text-[15px] md:text-base leading-relaxed text-neutral-300">
        A los 16 un amigo me llevó a ver picadas. Ahí entendí que los motores también hablan.
        Diez años después agarré la cámara: subirme, escuchar el rugido y volver a esa alegría de pibe
        es lo que persigo en cada sesión.
      </p>
    </header>

    <!-- Timeline con carril central fijo -->
    <div class="relative mt-6">
      <!-- línea vertical del carril, fija y centrada -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-800"></div>

      <div class="space-y-6">
        <!-- Fila 1 (izquierda) -->
        <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
          <!-- Col izquierda: contenido -->
          <div class="reveal md:pr-5 md:text-right">
            <h3 class="text-base md:text-lg font-bold text-white">Origen</h3>
            <p class="mt-1 text-neutral-300">
              De las picadas al obturador: me enamoré del ruido y la velocidad.
              Hoy me subo, escucho el motor y busco esa chispa que sentí la primera vez.
            </p>
            <div class="mt-2 rounded-xl bg-neutral-900/60 p-3.5 md:p-4 ring-1 ring-neutral-800 shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-yellow-500/40">
              <p class="text-sm text-neutral-400">Las fotos arrancaron como hobby y se quedaron como forma de vida. Si acelera, me reconecta.</p>
            </div>
          </div>

          <!-- Carril central con punto y conector a la izquierda -->
          <div class="relative mx-auto h-full w-px bg-transparent">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span class="block h-2 w-2 rounded-full bg-yellow-500 ring-2 ring-neutral-900 animate-pulse-glow"></span>
            </div>
            <span class="absolute top-1/2 right-full hidden h-px w-5 -translate-y-1/2 bg-neutral-800 md:block"></span>
          </div>

          <!-- Col derecha vacía -->
          <div aria-hidden="true"></div>
        </div>

        <!-- Fila 2 (derecha) -->
        <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
          <!-- Col izquierda vacía -->
          <div aria-hidden="true"></div>

          <!-- Carril central con punto y conector a la derecha -->
          <div class="relative mx-auto h-full w-px bg-transparent">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span class="block h-2 w-2 rounded-full bg-yellow-500 ring-2 ring-neutral-900 animate-pulse-glow"></span>
            </div>
            <span class="absolute top-1/2 left-full hidden h-px w-5 -translate-y-1/2 bg-neutral-800 md:block"></span>
          </div>

          <!-- Col derecha: contenido -->
          <div class="reveal md:pl-5">
            <h3 class="text-base md:text-lg font-bold text-white">Filosofía</h3>
            <p class="mt-1 text-neutral-300">
              Fotos con alma, edición con criterio. Soy detallista, pero priorizo lo natural:
              cada imagen dice algo propio y no la tapo con artificios.
            </p>
            <div class="mt-2 rounded-xl bg-neutral-900/60 p-3.5 md:p-4 ring-1 ring-neutral-800 shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-yellow-500/40">
              <p class="text-sm text-neutral-400">No-go: “dejalo así nomás”. Prefiero ajustar, innovar y pulir hasta que respire verdad.</p>
            </div>
          </div>
        </div>

        <!-- Fila 3 (izquierda) -->
        <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
          <!-- Col izquierda: contenido -->
          <div class="reveal md:pr-5 md:text-right">
            <h3 class="text-base md:text-lg font-bold text-white">Compromiso</h3>
            <p class="mt-1 text-neutral-300">
              Nada queda librado al azar: presencia, persistencia y respeto absoluto por tu máquina.
            </p>
            <div class="mt-2 rounded-xl bg-neutral-900/60 p-3.5 md:p-4 ring-1 ring-neutral-800 shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-yellow-500/40">
              <p class="text-sm text-neutral-400">Seguimiento 7 días post-entrega. Coordinamos por web, IG o WhatsApp según tu idea y el carácter del auto.</p>
            </div>
          </div>

          <!-- Carril central con punto y conector a la izquierda -->
          <div class="relative mx-auto h-full w-px bg-transparent">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span class="block h-2 w-2 rounded-full bg-yellow-500 ring-2 ring-neutral-900 animate-pulse-glow"></span>
            </div>
            <span class="absolute top-1/2 right-full hidden h-px w-5 -translate-y-1/2 bg-neutral-800 md:block"></span>
          </div>

          <!-- Col derecha vacía -->
          <div aria-hidden="true"></div>
        </div>
      </div>
    </div>

    <!-- Cita compacta -->
    <figure class="group relative mx-auto mt-8 max-w-2xl">
      <div aria-hidden="true" class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent blur-md opacity-15 transition-opacity duration-500 group-hover:opacity-25"></div>
      <div class="relative rounded-2xl bg-gradient-to-r from-yellow-500/25 via-yellow-500/10 to-neutral-800/0 p-[1px]">
        <div class="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm ring-1 ring-neutral-800/70 p-4 md:p-5 shadow-xl transition-transform duration-500 group-hover:-translate-y-0.5">
          <span aria-hidden="true" class="absolute -top-3.5 left-4 grid h-8 w-8 place-items-center rounded-full bg-yellow-500 text-black shadow-md">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M9 7H5v6h6V7H9zm10 0h-4v6h6V7h-2z"/></svg>
          </span>
          <blockquote class="text-lg md:text-xl text-neutral-100 leading-snug">
            “Las fotos no congelan autos: congelan lo que un auto te hace sentir.”
          </blockquote>
          <figcaption class="mt-2.5 flex items-center gap-3 text-xs md:text-sm text-neutral-400">
            <span class="inline-block h-1 w-6 rounded-full bg-yellow-500/70"></span>
            NB Motion Shots
          </figcaption>
        </div>
        <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-[-40%] top-0 h-full w-1/5 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></span>
        </span>
      </div>
    </figure>
  </div>
</section>
`;

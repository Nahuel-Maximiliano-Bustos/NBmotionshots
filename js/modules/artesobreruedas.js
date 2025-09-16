export const ArteSobreRuedas = () => `
<section id="arte-sobre-ruedas" class="relative overflow-hidden min-h-screen flex flex-col justify-center">
  <!-- fondo sutil con gradiente -->
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-30">
    <div class="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-500/30 to-yellow-300/10 blur-3xl"></div>
    <div class="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tr from-yellow-500/20 to-yellow-300/5 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-6">
    <header class="max-w-3xl">
      <h2 class="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-tight drop-shadow-sm">
        Arte sobre ruedas
      </h2>
      <p class="mt-4 text-lg text-neutral-300">
        Acá los fierros no posan: laten. Registramos el pulso de tu máquina y lo convertimos en imagen.
      </p>
    </header>

    <!-- Tarjetas -->
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <!-- Card 1 -->
      <article class="group card-reveal rounded-xl bg-neutral-900/60 ring-1 ring-neutral-800 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-yellow-500/50 relative">
        <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span class="absolute left-[-50%] top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine"></span>
        </div>
        <div class="p-6">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 ring-1 ring-yellow-500/30 transition-transform duration-500 group-hover:rotate-6">
            <svg class="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14 3l7 7-4 1-3 3-1 4-7-7 4-1 3-3 1-4zM5 19l3-3"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Pulso & Velocidad</h3>
          <p class="mt-2 text-neutral-300">Movimiento real, nada de pose. Rolling shots que huelen a caucho y viento.</p>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
        <footer class="p-6">
          <span class="text-sm text-neutral-400">Paneos y barridos precisos. Sensación de pista garantizada.</span>
        </footer>
      </article>

      <!-- Card 2 -->
      <article class="group card-reveal rounded-xl bg-neutral-900/60 ring-1 ring-neutral-800 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-yellow-500/50 relative">
        <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span class="absolute left-[-50%] top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine"></span>
        </div>
        <div class="p-6">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 ring-1 ring-yellow-500/30 transition-transform duration-500 group-hover:-rotate-6">
            <svg class="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 11l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2zM17 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Metal & Luz</h3>
          <p class="mt-2 text-neutral-300">Reflejos domados, líneas limpias. Cada curva dice quién es tu auto.</p>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
        <footer class="p-6">
          <span class="text-sm text-neutral-400">Highlights donde suman. Sombras con intención.</span>
        </footer>
      </article>

      <!-- Card 3 -->
      <article class="group card-reveal rounded-xl bg-neutral-900/60 ring-1 ring-neutral-800 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-yellow-500/50 relative">
        <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span class="absolute left-[-50%] top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine"></span>
        </div>
        <div class="p-6">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 ring-1 ring-yellow-500/30 transition-transform duration-500 group-hover:scale-110">
            <svg class="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3a9 9 0 100 18 3 3 0 003-3 3 3 0 013-3h1a5 5 0 000-10H12z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Cine Mecánico</h3>
          <p class="mt-2 text-neutral-300">Composición con carácter. Tu auto como protagonista de la escena.</p>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
        <footer class="p-6">
          <span class="text-sm text-neutral-400">Color grading a medida. Contraste justo, piel de acero.</span>
        </footer>
      </article>
    </div>
  </div>
</section>
`;

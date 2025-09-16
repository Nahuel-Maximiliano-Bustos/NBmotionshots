export const Navbar = () => `
<header class="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur border-b border-white/10" role="navigation" aria-label="Principal">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <a href="#inicio" class="flex items-center gap-3 group focus-visible:ring-2 ring-brand" aria-label="NB Motion Shots - Inicio">
  <img src="/assets/mi marca.png" alt="NB Motion Shots" width="56" height="56" class="h-14 w-14 rounded bg-transparent p-0 group-hover:shadow-glow transition" loading="eager" />
      <span class="font-display text-xl tracking-wider">NB Motion <span class="text-brand">Shots</span></span>
    </a>
    <nav class="hidden md:flex items-center gap-8 text-sm">
      <a href="#servicios" class="hover:text-brand focus-visible:text-brand">Servicios</a>
  <a href="#artesobreruedas"   class="hover:text-brand focus-visible:text-brand">Arte sobre ruedas</a>
  <a href="#vision-pasion"    class="hover:text-brand focus-visible:text-brand">Visión & Pasión</a>
      <a href="#faq"       class="hover:text-brand focus-visible:text-brand">FAQ</a>
  <a href="#contacto"  class="px-4 py-2 rounded bg-brand hover:bg-accent text-ink font-semibold shadow-glow transition focus-visible:ring-2 ring-accent">Reservar</a>
    </nav>
    <div class="flex items-center gap-2 md:hidden">
      <button id="menuBtn" class="p-2 rounded ring-1 ring-white/10 focus-visible:ring-2 ring-brand" aria-label="Abrir menú">☰</button>
    </div>
  </div>
  <div id="mobileMenu" class="md:hidden hidden px-6 pb-6 space-y-4 bg-ink/95 border-b border-white/10">
    <a href="#servicios" class="block">Servicios</a>
  <a href="#artesobreruedas" class="block">Arte sobre ruedas</a>
  <a href="#vision-pasion" class="block">Visión & Pasión</a>
    <a href="#faq" class="block">FAQ</a>
    <a href="#contacto" class="block">Contacto</a>
  </div>
</header>
`;

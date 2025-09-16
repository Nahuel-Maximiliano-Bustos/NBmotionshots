// footer.js — Pie de página básico para NB Motion Shots
export const Footer = () => `
<footer class="bg-gradient-to-br from-ink via-black to-ink border-t border-brand/30 pt-12 pb-4 text-white/90 text-sm">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
    <!-- Branding y claim -->
    <div class="flex-1 flex flex-col gap-3 min-w-[220px]">
      <div class="flex items-center gap-4">
        <img src="/assets/mi marca.png" alt="NB Motion Shots logo" class="w-16 h-16 rounded-lg bg-white/10 p-2 border border-white/20 shadow-glow" style="backdrop-filter: blur(2px);" loading="lazy" />
        <div>
          <span class="font-display text-2xl tracking-wider">NB Motion <span class="text-brand">Shots</span></span>
        </div>
      </div>
      <div class="text-white/70 mt-2">Fotografía automotriz <span class="text-brand">·</span> Córdoba <span class="text-brand">·</span> Argentina / Worldwide</div>
      <div class="italic text-white/50 text-xs mt-1">"Velocidad, diseño y emoción en cada toma."</div>
    </div>
    <!-- Navegación -->
    <div class="flex-1 flex flex-col gap-2 min-w-[180px]">
      <div class="font-semibold text-white/80 mb-1">Navegación</div>
      <nav class="grid grid-cols-2 gap-2 text-white/70">
        <a href="#inicio" class="hover:text-brand transition">Inicio</a>
        <a href="#servicios" class="hover:text-brand transition">Servicios</a>
        <a href="#artesobreruedas" class="hover:text-brand transition">Arte sobre ruedas</a>
        <a href="#visionpasion" class="hover:text-brand transition">Visión & Pasión</a>
        <a href="#faq" class="hover:text-brand transition">FAQ</a>
        <a href="#contacto" class="hover:text-brand transition">Contacto</a>
      </nav>
    </div>
    <!-- Contacto y redes -->
    <div class="flex-1 flex flex-col gap-2 min-w-[220px]">
      <div class="font-semibold text-white/80 mb-1">Contacto</div>
      <div class="flex items-center gap-2 text-white/70">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#FFD600"/></svg>
        Córdoba, Argentina / Worldwide
      </div>
      <div class="flex items-center gap-2 text-white/70">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm8 8l8-5v10l-8-5zm0 0L4 7v10l8-5z" fill="#FFD600"/></svg>
  <a href="mailto:nbmotionshots@gmail.com" class="hover:text-brand transition">nbmotionshots@gmail.com</a>
      </div>
      <div class="flex items-center gap-2 text-white/70">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.711.307 1.264.489 1.697.625.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#FFD600"/></svg>
  <a href="https://wa.me/5493513400356" target="_blank" rel="noopener" class="hover:text-brand transition">WhatsApp</a>
      </div>
      <div class="flex items-center gap-2 text-white/70">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5h8.5zm-4.25 2.25a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm6.25 10.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill="#FFD600"/></svg>
        <a href="https://instagram.com/nbmotionshots" target="_blank" rel="noopener" class="hover:text-brand transition">@nbmotionshots</a>
      </div>
    </div>
  </div>
  <div class="mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
    <div>&copy; ${new Date().getFullYear()} NB Motion Shots. Todos los derechos reservados.</div>
    <div class="flex items-center gap-2">
      <span class="text-brand">#ArteEnMovimiento</span>
      <span class="hidden sm:inline">·</span>
      <span>by Nahuel</span>
    </div>
  </div>
</footer>
`;

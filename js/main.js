// ----------- Visión & Pasión: Reveal y contadores -----------
function revealVisionPasion() {
    document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4');
    });
    const ioVP = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                entry.target.classList.add('transition', 'duration-700', 'ease-out');
                entry.target.style.transitionDelay = `${Math.random() * 180}ms`;
                ioVP.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal, .timeline-item').forEach(el => ioVP.observe(el));
}

function animateVisionCounters() {
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    function animateCounter(el, duration = 1200) {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const start = 0;
        const startTime = performance.now();
        function tick(now) {
            const p = Math.min(1, (now - startTime) / duration);
            const val = Math.floor(start + (target - start) * easeOut(p));
            el.textContent = val.toString();
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }
    const ioCounters = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.counter').forEach(animateCounter);
                ioCounters.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stat-card').forEach(card => ioCounters.observe(card));
}
// main.js — Monta componentes y lógica global NB Motion Shots
import { Navbar } from './modules/navbar.js';
import { Hero } from './modules/hero.js';
import { Services } from './modules/services.js';
import { ArteSobreRuedas } from './modules/artesobreruedas.js';
import { VisionPasion } from './modules/visionpasion.js';
import { FAQ } from './modules/faq.js';
import { Contact } from './modules/contact.js';
import { Footer } from './modules/footer.js';
import { handleContact } from './modules/formlogic.js';

const App = () => `
    ${Navbar()}
    ${Hero()}
    ${Services()}
    ${ArteSobreRuedas()}
    ${VisionPasion()}
    ${FAQ()}
    ${Contact()}
    ${Footer()}
`;

document.getElementById('app').innerHTML = App();

// ----------- Reveal + Stagger -----------
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('[data-animate]');
if (!prefersReduced) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
                setTimeout(() => {
                    entry.target.classList.add('animate-fadeUp');
                }, delay);
                io.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
} else {
    revealEls.forEach(el => el.style.opacity = 1);
}

// ----------- Hero: Mosaico animado diagonal -----------
// (Eliminado: mosaico de marcas de autos)

// ----------- Hero: Speed lines en canvas -----------
function speedLines() {
    const canvas = document.getElementById('speedLines');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, lines = [];
    function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    function spawnLine() {
        const angle = Math.PI/2 + (Math.random()-0.5)*0.3;
        lines.push({
            x: w/2 + (Math.random()-0.5)*w*0.3,
            y: h*0.7,
            vx: Math.cos(angle)*Math.random()*2,
            vy: -Math.abs(Math.sin(angle))*Math.random()*6-2,
            alpha: 0.18,
            life: 0
        });
    }
    function draw() {
        ctx.clearRect(0,0,w,h);
        lines.forEach(line => {
            ctx.save();
            ctx.globalAlpha = line.alpha;
            ctx.strokeStyle = 'rgba(0,200,255,1)';
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + line.vx*24, line.y + line.vy*24);
            ctx.stroke();
            ctx.restore();
            line.x += line.vx;
            line.y += line.vy;
            line.alpha *= 0.97;
            line.life++;
        });
        lines = lines.filter(l => l.alpha > 0.01 && l.life < 80);
        if (Math.random() < 0.18) spawnLine();
        if (!window.__reducedMotion) requestAnimationFrame(draw);
    }
    draw();
}

// ----------- Hero: Botón magnético -----------
function magnetCTA() {
    const btn = document.getElementById('ctaMagnet');
    if (!btn) return;
    const halo = document.getElementById('ctaHalo');
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        btn.style.transform = `translate(${x*0.12}px,${y*0.12}px)`;
        if (halo) halo.style.boxShadow = `0 12px 40px rgba(0,200,255,.35)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        if (halo) halo.style.boxShadow = '';
    });
}

// ----------- Servicios: Tilt 3D en cards -----------
function tiltCards() {
        document.querySelectorAll('.card-tilt').forEach(card => {
                card.addEventListener('mousemove', e => {
                        const rect = card.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width;
                        const y = (e.clientY - rect.top) / rect.height;
                        card.style.transform = `perspective(600px) rotateY(${(x-0.5)*16}deg) rotateX(${(0.5-y)*12}deg) scale(1.03)`;
                        card.style.boxShadow = '0 8px 32px rgba(0,200,255,.18), 0 2px 8px rgba(10,10,14,.18)';
                        card.style.borderTop = '2px solid rgba(0,200,255,.25)';
                });
                card.addEventListener('mouseleave', () => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                        card.style.borderTop = '';
                });
        });
}

// ----------- Arte sobre ruedas: Reveal on scroll -----------
function revealArteSobreRuedas() {
    document.querySelectorAll('.card-reveal').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-4');
    });
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                entry.target.classList.add('transition', 'duration-700', 'ease-out');
                entry.target.style.transitionDelay = `${Math.random() * 150}ms`;
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.card-reveal').forEach((el) => io.observe(el));
}

// ----------- Smooth scroll para anclas -----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ----------- Menú mobile -----------
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'menuBtn') {
        document.getElementById('mobileMenu')?.classList.toggle('hidden');
    }
});

// ----------- Barra de progreso de scroll -----------
function scrollProgress() {
    let bar = document.getElementById('scrollBar');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'scrollBar';
        bar.style.position = 'fixed';
        bar.style.top = '0';
        bar.style.left = '0';
        bar.style.height = '3px';
        bar.style.width = '0';
        bar.style.background = 'linear-gradient(90deg, #00C8FF, #FFA000)';
        bar.style.zIndex = '9999';
        bar.style.transition = 'width .2s cubic-bezier(.4,0,.2,1)';
        document.body.appendChild(bar);
    }
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = Math.max(0, window.scrollY / h);
        bar.style.width = (p*100) + '%';
    });
}

// ----------- Lógica del formulario -----------
handleContact();

// ----------- Init -----------
window.__reducedMotion = prefersReduced;
window.addEventListener('DOMContentLoaded', () => {
    speedLines();
    magnetCTA();
    tiltCards();
    scrollProgress();
    revealArteSobreRuedas();
    revealVisionPasion();
    animateVisionCounters();
});

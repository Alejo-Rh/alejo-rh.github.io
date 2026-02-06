// ============================================
// SMOOTH SCROLL
// ============================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scroll para links del menú
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        scrollToSection(targetId);
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(11, 19, 43, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(157, 78, 221, 0.3)';
    } else {
        navbar.style.background = 'rgba(11, 19, 43, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER - ANIMACIONES
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas
const animatedElements = document.querySelectorAll('.skill-card, .proyecto-card, .contacto-card');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    fadeInObserver.observe(element);
});

// ============================================
// ACTIVE LINK EN NAVBAR
// ============================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.opacity = '0.8';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.opacity = '1';
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ============================================
// TYPING EFFECT (OPCIONAL)
// ============================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============================================
// PARTICLES BACKGROUND (OPCIONAL - COMENTADO)
// ============================================
/*
// Si quieres agregar un efecto de partículas de fondo, descomenta esto:
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(157, 78, 221, 0.5)';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

createParticles();
*/

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👨‍💻 Portfolio by Alejandro Rodriguez', 'color: #9d4edd; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Desarrollado con HTML, CSS y JavaScript', 'color: #3a86ff; font-size: 14px;');
console.log('%c💜 ¿Buscas un desarrollador? Hablemos!', 'color: #cbd5e1; font-size: 12px;');

// ============================================
// READY MESSAGE
// ============================================
window.addEventListener('load', () => {
    console.log('✨ Portfolio cargado correctamente');
});

document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURACIÓN DE PARTÍCULAS ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: { value: "#8B949E" },
            links: {
                color: "#8B949E",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            collisions: { enable: true },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80,
            },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    });

    // --- LÓGICA DEL NAVBAR Y MENÚ MÓVIL ---
    const navbar = document.querySelector(".navbar");
    const burger = document.getElementById("burger");
    const burgerIcon = document.getElementById("burger-icon");
    const navLinks = document.querySelector(".nav-links");

    const handleScroll = () => {
        // Esta función podría usarse en el futuro si se necesita un efecto de scroll
    };

    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        burgerIcon.classList.toggle('fa-bars');
        burgerIcon.classList.toggle('fa-times');
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
    };

    window.addEventListener("scroll", handleScroll);
    burger.addEventListener("click", toggleMenu);

    // --- LÓGICA PARA HOVER AVANZADO EN TARJETAS ---
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
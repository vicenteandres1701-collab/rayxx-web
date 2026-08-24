// ================================
// RAYXX — INTERACTIONS
// ================================

// Navbar: cambia ligeramente al hacer scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.style.background = "rgba(8, 8, 10, 0.92)";
        navbar.style.borderBottomColor = "rgba(139, 92, 246, 0.12)";
    } else {
        navbar.style.background = "rgba(8, 8, 10, 0.75)";
        navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.04)";
    }
});


// ================================
// ELEMENTOS QUE APARECEN AL BAJAR
// ================================

const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .process-step, .section-heading"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach((element) => {
    element.classList.add("hidden-animation");
    observer.observe(element);
});


// ================================
// EFECTO PARALLAX DEL HERO
// ================================

const heroVisual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (event) => {

    if (!heroVisual) return;

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ================================
// AÑO AUTOMÁTICO DEL FOOTER
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} RayxX. Todos los derechos reservados.`;
}


// ================================
// BOTONES DE NAVEGACIÓN
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
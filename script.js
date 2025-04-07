// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behaviour: "smooth" });
        }
    });
});

// Back to Top
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
});

// Dark Toggle Mode
const toggleTheme = document.getElementById("theme-toggle");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Animations
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on load
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

// Typing animations for Hero
const text = ["Cybersecurity Enthusiast.", "Full-Stack Dev.", "Java + React Coder.", "C++"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    currentText = text[i];
    let display = isDeleting
    ? currentText.substring(0, j--)
    : currentText.substring(0, j++);

    document.getElementById("typed-text").innerText = display;

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 300);
    }
}
type();

// Time-based Hero Greeting
const heroTitle = document.querySelector('hero-title-animate');
if (heroTitle) {
    const hour = new Date().getHours();
    let greeting = "Welcome to my portfolio";
    if (hour < 12) greeting = "Good Morning! 👋";
    else if (hour < 18) greeting = "Good afternoon! 🌞";
    else greeting = "Good evening! 🌙";
    heroTitle.textContent = greeting;
}
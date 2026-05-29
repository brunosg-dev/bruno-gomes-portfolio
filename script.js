// Changes the navbar style when the user scrolls down the page

const navBar = document.querySelector(".nav-wrap");
const revealItems = document.querySelectorAll(".hero-content, .main-content > .panel");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateNavbarOnScroll() {
    if (window.scrollY > 40) {
        navBar.classList.add("nav-scrolled");
    } else {
        navBar.classList.remove("nav-scrolled");
    }
}

// Run once when the page loads
updateNavbarOnScroll();

// Run again whenever the user scrolls
window.addEventListener("scroll", updateNavbarOnScroll);

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
        item.classList.add("is-visible");
    });
} else {
    revealItems.forEach((item) => {
        item.classList.add("scroll-reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
}

// Changes the navbar style when the user scrolls down the page

const navBar = document.querySelector(".nav-wrap");

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
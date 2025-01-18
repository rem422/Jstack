// Navbar mobile menu
const menuBtn =  document.querySelector('.navbar .menu_btn i');
const mobileMenu = document.querySelector('.navbar .nav_menu');
const menuItems = document.querySelectorAll(".navbar .nav_menu .nav_link");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

// Footer copyright year auto-update
const yearEl = document.getElementById('year');

const currentYear = new Date().getFullYear();
const newYear = `01 january ${currentYear +1} 00:00:00`;
yearEl.innerText = currentYear;
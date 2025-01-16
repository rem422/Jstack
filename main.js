const menuBtn =  document.querySelector('.navbar .menu_btn i');
const mobileMenu = document.querySelector('.navbar .nav_menu');
const menuItems = document.querySelectorAll('.navbar .nav_menu .nav_link');

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


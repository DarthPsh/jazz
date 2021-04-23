const burger = document.querySelector('.burger');
const site = document.querySelector('body');
const mobileMenu = document.querySelector('.mob-menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
    site.classList.toggle('overflow');
    mobileMenu.classList.toggle('mob-menu_active');
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 22,
});
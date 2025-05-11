// ハンバーガーメニュー
const hamburger = document.querySelector('#js-hamburger');
const nav = document.querySelector('.p-nav-sp');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

// ファーストビューのスライダー
const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
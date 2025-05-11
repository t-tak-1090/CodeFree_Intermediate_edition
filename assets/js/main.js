// ハンバーガーメニュー
const hamburger = document.querySelector('#js-hamburger');
const nav = document.querySelector('.p-nav-sp');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});
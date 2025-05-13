// aos.js
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1500,
        easing: 'ease-in-out',
    });
});

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

// スクロールしたらヘッダーの背景色が変わる
window.addEventListener('DOMContentLoaded', () => {
    // ヘッダーとsectionを取得する
    const header = document.getElementById('header');
    const section = document.querySelector('.js-catchphrase');

    // スクロールされたときの動きを決める
    window.addEventListener('scroll', () => {
      // sectionの位置（画面の上から何px下か）を調べる
        const sectionTop = section.getBoundingClientRect().top;

      // ヘッダーの高さを取得
        const headerHeight = header.offsetHeight;

      // スクロール位置がsectionに近づいたら背景色をつける
        if (sectionTop <= headerHeight) {
        header.classList.add('is-colored');
        } else {
        header.classList.remove('is-colored');
        }
    });
});

// モーダルの表示
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('js-modal');
    const modalImg = document.getElementById('js-modal-img');
    const modalText = document.getElementById('js-modal-text');
    const closeBtn = document.getElementById('js-modal-close');

    // 画像とテキスト、両方を対象にする
    const popups = document.querySelectorAll('.js-popup');

    popups.forEach(el => {
        el.addEventListener('click', () => {
            // <li> を取得（クリックされた画像 or テキストの親）
            const item = el.closest('li');

            // 画像タグを探す（必ず1つある想定）
            const imgTag = item.querySelector('img');

            // モーダルに表示する画像を取得
            const modalImageSrc = imgTag.getAttribute('data-modal') || imgTag.src;
            modalImg.src = modalImageSrc;

            // テキスト（1行に整形）
            const text = item.querySelector('.p-course__item-text').textContent;
            modalText.textContent = text;

            // モーダルを表示
            modal.style.display = 'flex';
        });
    });

    // ×ボタンでモーダルを閉じる
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // モーダル外をクリックして閉じる
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// TOPへ戻るボタン
const pagetop_btn = document.querySelector(".js-pageTop");

pagetop_btn.addEventListener("click", scroll_top);

function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 100) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
        pagetop_btn.style.opacity = "0";
    }
}

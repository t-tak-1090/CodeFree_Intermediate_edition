// aos.js
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1500,
        easing: 'ease-in-out',
        once: false,
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});


// ハンバーガーメニュー
const hamburger = document.querySelector('#js-hamburger');
const nav = document.querySelector('.p-nav-sp');
const navLinks = document.querySelectorAll('.p-nav-sp__item a');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
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
    // AOS 初期化
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1500,
        easing: 'ease-in-out',
    });

    const modal = document.getElementById('js-modal');
    const modalImg = document.getElementById('js-modal-img');
    const modalText = document.getElementById('js-modal-text');
    const closeBtn = document.getElementById('js-modal-close');
    const popups = document.querySelectorAll('.js-popup');
    const aosElements = document.querySelectorAll('[data-aos]'); // ← AOS要素取得
    const originalAosValues = new Map(); // ← 元の属性を保持

    let scrollPosition = 0;

    popups.forEach(el => {
        el.addEventListener('click', () => {
            const item = el.closest('li');
            const imgTag = item.querySelector('img');
            const modalImageSrc = imgTag.getAttribute('data-modal') || imgTag.src;
            modalImg.src = modalImageSrc;

            const text = item.querySelector('.p-course__item-text').textContent;
            modalText.textContent = text;

            // 背景スクロールを止める処理
            scrollPosition = window.pageYOffset;
            document.body.classList.add('is-fixed');
            document.body.style.top = `-${scrollPosition}px`;

            // --- data-aos を一時的に削除 ---
            aosElements.forEach(aosEl => {
                originalAosValues.set(aosEl, aosEl.getAttribute('data-aos'));
                aosEl.removeAttribute('data-aos');
            });

            // モーダル表示時にヘッダーのz-indexを0にする
            document.querySelector('.l-header')?.classList.add('is-modal-open');

            // モーダル表示
            modal.style.display = 'flex';
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';

        // モーダル表示時にヘッダーのz-indexを0にする
        document.querySelector('.l-header')?.classList.remove('is-modal-open');

        // 背景スクロール復帰処理
        document.body.classList.remove('is-fixed');
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);

        // --- data-aos を復元 ---
        originalAosValues.forEach((value, el) => {
            el.setAttribute('data-aos', value);
        });
        originalAosValues.clear();

        // AOS 再初期化
        AOS.refresh();
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
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

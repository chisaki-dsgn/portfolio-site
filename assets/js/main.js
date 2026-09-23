// ハンバーガーメニュー
const hamburgerBtn = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-nav');

hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
    // メニュー外をクリックしたら閉じる
document.addEventListener('click', (e)=>{
    if(!menu.classList.contains('is-active')) return;

    const isClickMenu = menu.contains(e.target);
    const isClickBtn = hamburgerBtn.contains(e.target);
    if(!isClickMenu && !isClickBtn){
        menu.classList.remove('is-active');
        hamburgerBtn.classList.remove('is-active');
    }
});

// archive-worksの画像フェードイン
const fadeImg = document.querySelectorAll('.js-fadein');
const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('is-active');
        observer.unobserve(entry.target);
        }
    });
},{
    rootMargin: '0px 0px -20% 0px'
});

fadeImg.forEach(e =>{
    observer.observe(e)
});
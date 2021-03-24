let btn = document.querySelector('.hamburger-btn');
let nav = document.getElementById('nav');
btn.addEventListener('click', () => {
    nav.classList.toggle('active-nav');
    console.log('click')
})
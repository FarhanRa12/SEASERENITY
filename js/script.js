// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//hamburger menu diklik 
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
    }

// klik diluar sidebar untuk menghilangkan navm
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove('active');
    }
});
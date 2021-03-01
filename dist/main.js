const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list-link');




hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');

})

navLinks.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
}
))


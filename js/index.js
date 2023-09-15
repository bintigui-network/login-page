const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const ulNavbar = document.querySelector('.ul-navbar')

const sectionForm = document.querySelector('.section-form')
const register = document.querySelector('.register-link')
const login = document.querySelector('.login-link')

menuOpen.addEventListener('click', () => {
    ulNavbar.classList.add('active')
})
menuClose.addEventListener('click', () => {
    ulNavbar.classList.remove('active')
})
register.addEventListener('click', () => {
    sectionForm.classList.add('show')
})
login.addEventListener('click', () => {
    sectionForm.classList.remove('show')
})






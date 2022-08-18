

// ES5 function declartion
var hamburger = document.querySelector('.hamburger-menu')
var mobilelinks = document.querySelector('.mobile__link-holder')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobilelinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}
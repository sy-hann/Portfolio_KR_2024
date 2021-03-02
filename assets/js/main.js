// Show menu
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show__menu')
        })
    }
}
showMenu('nav__toggle','nav__menu')

// Remov mobile menu when click each link
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// Change header color
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll__header');else header.classList.remove('scroll__header');
}
window.addEventListener('scroll', scrollHeader)

// Show scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scrollTop')
    if(this.scrollY >= 560) scrollTop.classList.add('show__scroll');else scrollTop.classList.remove('show__scroll');
}
window.addEventListener('scroll', scrollTop)
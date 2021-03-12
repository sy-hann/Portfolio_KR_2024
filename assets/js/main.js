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

// Portfolio - MIXITUP Filter 
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

// Link active Portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active__portfolio'))
        this.classList.add('active__portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

// Swiper carousel
const swiper = new Swiper('.swiper-container', {
    spaceBetween:16,
    grabCursor:true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },

    }
  });

//   GSAP ANIMATION
gsap.from('.home__img', {opacity:0, duration:2, delay:.5, x:60})
gsap.from('.home__data', {opacity:0, duration:2, delay:.8, y:25})
gsap.from('.home__greeting,.home__name,.home__profession,.home__button', {opacity:0, duration:2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__logo,.nav__toggle', {opacity:0, duration:2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home__social-icon', {opacity:0, duration:2, delay:2.3, y:25, ease:'expo.out', stagger:.2})
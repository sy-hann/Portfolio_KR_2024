'use strict';

// 페이지 아래로 스크롤시 Header에 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (window.scrollY > headerHeight) {
		header.classList.add('header--bg');
	} else {
		header.classList.remove('header--bg');
	}
});


//스크롤 시 home에 투명도 추가
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
	home.style.opacity = 1- window.scrollY / homeHeight;
})

//scroll to top 버튼 활성화
const scrollTop = document.querySelector('.scroll-top');
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2 ) {
		scrollTop.classList.add('scroll-top--active')
	} else {
		scrollTop.classList.remove('scroll-top--active')
	}
})

//navbar 토글버튼 클릭 처리
const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__toggle');
headerToggle.addEventListener('click', () => {
	headerMenu.classList.toggle('header__menu--active');
	header.classList.toggle('header--active');
})

// //navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
headerMenu.addEventListener('click', () => {
	headerMenu.classList.remove('header__menu--active')
	header.classList.remove('header--active');
})
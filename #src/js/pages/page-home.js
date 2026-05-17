const delay = document.querySelector('.swiper.mySwiper').dataset.swiperDelay;

const swiper = new Swiper(".mySwiper", {
	grabCursor: true,
	slidesPerView: 1,
	autoHeight: true,
	autoplay: {
		delay: Number(delay),
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper2 = new Swiper(".buy-now-mySwiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
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



document.addEventListener('click', e => {
	const btn = e.target.closest('.wrapper-input>.btn-icon');
	
	if (!btn) return;
	
	const input = btn.closest('.wrapper-input').querySelector('input');
	
	input.type = input.type === 'password'
		? 'text'
		: 'password';
	
	btn.classList.toggle('active');
});
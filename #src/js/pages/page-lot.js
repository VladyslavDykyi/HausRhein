document.addEventListener('DOMContentLoaded', function() {
	const textMoreBlock = document.querySelector('.text-more');
	const button = textMoreBlock.querySelector('button');
	const paragraph = textMoreBlock.querySelector('p');
	let isExpanded = false;
	
	// Зберігаємо оригінальний текст
	const originalText = paragraph.textContent;
	
	// Зберігаємо початкову висоту для 2 рядків
	const lineHeight = parseInt(window.getComputedStyle(paragraph).lineHeight);
	const COLLAPSED_HEIGHT = lineHeight * 2 + 'px';
	
	// Функція для перевірки чи текст коротший за 2 рядки
	function isTextShort() {
		const tempDiv = document.createElement('div');
		tempDiv.style.cssText = window.getComputedStyle(paragraph).cssText;
		tempDiv.style.height = 'auto';
		tempDiv.style.maxHeight = 'none';
		tempDiv.style.overflow = 'visible';
		tempDiv.style.display = '-webkit-box';
		tempDiv.style.webkitLineClamp = 'none';
		tempDiv.textContent = originalText;
		document.body.appendChild(tempDiv);
		
		const textHeight = tempDiv.scrollHeight;
		const maxHeight = lineHeight * 2;
		
		document.body.removeChild(tempDiv);
		
		return textHeight <= maxHeight;
	}
	
	if (isTextShort()) {
		button.style.display = 'none';
		paragraph.style.webkitLineClamp = 'none';
		paragraph.style.maxHeight = 'none';
		const style = document.createElement('style');
		style.textContent = `.text-more p::after { display: none; }`;
		document.head.appendChild(style);
		return;
	}
	
	// Функція для плавного розгортання
	function expandText() {
		isExpanded = true;
		textMoreBlock.classList.add('show');
		
		// Тимчасово прибираємо обмеження, щоб отримати повну висоту
		paragraph.style.webkitLineClamp = 'unset';
		paragraph.style.maxHeight = 'none';
		
		// Отримуємо повну висоту
		const fullHeight = paragraph.scrollHeight;
		
		// Повертаємо до згорнутого стану
		paragraph.style.maxHeight = COLLAPSED_HEIGHT;
		
		// Запускаємо плавне розгортання
		requestAnimationFrame(() => {
			paragraph.style.maxHeight = fullHeight + 'px';
		});
		
		button.textContent = 'Show Less ↑';
	}
	
	// Функція для плавного згортання
	function collapseText() {
		isExpanded = false;
		textMoreBlock.classList.remove('show');
		
		// Отримуємо поточну висоту
		const currentHeight = paragraph.scrollHeight;
		
		// Встановлюємо поточну висоту як фіксовану
		paragraph.style.maxHeight = currentHeight + 'px';
		
		// Запускаємо плавне згортання
		requestAnimationFrame(() => {
			paragraph.style.maxHeight = COLLAPSED_HEIGHT;
		});
		
		// Після завершення анімації повертаємо webkit-line-clamp
		setTimeout(() => {
			if (!isExpanded) {
				paragraph.style.webkitLineClamp = '2';
			}
		}, 600); // Час має відповідати transition
		
		button.textContent = 'Show More →';
	}
	
	// Додаємо обробник кліку
	button.addEventListener('click', function(e) {
		e.preventDefault();
		
		if (isExpanded) {
			collapseText();
		} else {
			expandText();
		}
	});
	
	// Адаптація при зміні розміру вікна
	let resizeTimeout;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			if (isExpanded) {
				paragraph.style.maxHeight = 'none';
				const newHeight = paragraph.scrollHeight;
				paragraph.style.maxHeight = newHeight + 'px';
			}
		}, 250);
	});
});

const swiperNav = new Swiper(".mySwiper-nav", {
	loop: true,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
const swiperFor = new Swiper(".mySwiper-for", {
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiperNav,
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
document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('orderBtn');
	const toast = document.getElementById('copyToast');
	let toastTimer = null;
	
	btn.addEventListener('click', async () => {
		// Беремо текст саме з <span> всередині кнопки
		const span = btn.querySelector('span');
		if (!span) return;
		
		const text = span.textContent.trim();
		
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
			} else {
				// fallback для не-secure контексту
				const ta = document.createElement('textarea');
				ta.value = text;
				ta.style.position = 'fixed';
				ta.style.opacity = '0';
				document.body.appendChild(ta);
				ta.select();
				document.execCommand('copy');
				document.body.removeChild(ta);
			}
			
			// показати "copied"
			toast.classList.add('show');
			
			// скинути попередній таймер, якщо клікнули ще раз
			if (toastTimer) clearTimeout(toastTimer);
			
			// прибрати через 2 секунди
			toastTimer = setTimeout(() => {
				toast.classList.remove('show');
			}, 2000);
			
		} catch (err) {
			console.error('Не вдалося скопіювати:', err);
		}
	});
});
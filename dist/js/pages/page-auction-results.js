document.addEventListener('click', e => {
	const btn = e.target.closest('.wrapper-input>.btn-icon');
	
	if (!btn) return;
	
	const input = btn.closest('.wrapper-input').querySelector('input');
	
	input.type = input.type === 'password'
		? 'text'
		: 'password';
	
	btn.classList.toggle('active');
});
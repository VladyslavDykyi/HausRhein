document.addEventListener('DOMContentLoaded', function() {
	const checkbox = document.getElementById('confirmRegistrationModal');
	const collapsibleBlock = document.querySelector('.profile__section-collapsible');
	
	if (checkbox && collapsibleBlock) {
		
		checkbox.addEventListener('change', function() {
			if (!this.checked) {
				collapsibleBlock.classList.add('active')
			} else {
				collapsibleBlock.classList.remove('active');
			}
		});
	}
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
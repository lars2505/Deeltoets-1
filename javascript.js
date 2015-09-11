
var fieldset1 = document.querySelector('fieldset:nth-of-type(2)');
var fieldset2 = document.querySelector('fieldset:nth-of-type(3)');

fieldset1.classList.add('inactive');
fieldset2.classList.add('inactive');

document.querySelector('input[type="radio"]').onclick = function() {
	fieldset1.classList.add('active');
	fieldset2.classList.remove('active');
}

document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	fieldset1.classList.remove('active');
	fieldset2.classList.add('active');
}
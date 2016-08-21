var writeMe = document.querySelector('.btn-write-me');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');
var nameLine = popup.querySelector('.post-name');
var close = popup.querySelector('.modal-content-close');

writeMe.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.add('modal-content-show');
	nameLine.focus();
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function(event){
	if (event.keyCode == 27) {
		if (popup.classList.contains('modal-content-show')) {
			popup.classList.remove('modal-content-show');
		}
	}
});
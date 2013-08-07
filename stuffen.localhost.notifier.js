var element = document.createElement('div');
var root = document.getElementsByTagName( 'body' )[0];

element.setAttribute('id','localhost-notifier');
element.innerHTML = '<div>No place like</div>localhost';

element.addEventListener("click", function() {
	this.remove();
}, false);

root.appendChild(element);

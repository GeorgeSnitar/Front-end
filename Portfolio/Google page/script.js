var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
	items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
	pos = Math.max(pos - 1,0);
	setTransform();
}
function next() {
	pos = Math.min(pos + 1 , itemCount -1);
	setTransform();
}
window.addEventListener('resize', setTransform);










function Menu(options) {
  var elem = options.elem;

  elem.onmousedown = function() {
    return false;
  }

  elem.onclick = function(event) {
    if (event.target.closest('.title')) {
      elem.classList.toggle('open');
    }
  };

}




menu.onclick = function myFunction(){
	var x = document.getElementById("nav-container");

	if(x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}
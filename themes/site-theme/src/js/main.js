import styles from './../css/main.css';
import JQueryMarquee from 'jquery.marquee';
import slick from 'slick-carousel';
import { tns } from "tiny-slider/src/tiny-slider";

$('.marquee').marquee();

// mobile menu toggle

var openmenu = document.querySelector('.mobile-menu-button');
var mobilemenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');

openmenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
};

var closemenu = document.querySelector('.close-menu');

closemenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
};

// END

// Scroll anchor links

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
};

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
};

var openSelect = document.querySelector('.hero-select');
var selectMenu0 = document.querySelector('.hero-select-menu-top');
var selectMenu1 = document.querySelector('.hero-select-menu-mid');
var selectMenu2 = document.querySelector('.hero-select-menu-bot');
var selectIcon = document.querySelector('.fa-angle-down');
var selectPlaceholder0 = document.querySelector('.hero-select-placeholder-top');
var selectPlaceholder1 = document.querySelector('.hero-select-placeholder-mid');
var selectPlaceholder2 = document.querySelector('.hero-select-placeholder-bot');

openSelect.onclick = function() {
  openSelect.classList.toggle('h-80');
  openSelect.classList.toggle('overflow-scroll');
  openSelect.classList.toggle('md:h-48');
  openSelect.classList.toggle('lg:h-72');
  openSelect.classList.toggle('bg-color-004A5D');
  openSelect.classList.toggle('md:bg-transparent');
  selectMenu0.classList.toggle('hidden');
  selectMenu0.classList.toggle('text-transparent');
  selectMenu1.classList.toggle('hidden');
  selectMenu2.classList.toggle('hidden');
  selectMenu2.classList.toggle('-mt-20');
  selectMenu2.classList.toggle('text-transparent');
  selectIcon.classList.toggle('hidden');
  selectPlaceholder0.classList.toggle('md:hidden');
  selectPlaceholder1.classList.toggle('hidden');
  selectPlaceholder2.classList.toggle('md:hidden');
};

// END

// Sliders

// var slider = tns({
//   "container": "#homepage-slider-images",
//   "items": 1,
//   "controlsContainer": "#slider-controls",
//   "swipeAngle": false,
//   "speed": 400,
//   "center": true,
//   "mouseDrag": true,
//   "mode": "gallery",
//   "autoplay": false,
//   "autoplayHoverPause": true
// });

// var sliderTestimonials = tns({
//   "container": "#testimonial-slider-images",
//   "items": 1,
//   "controlsContainer": "#testimonial-slider-controls",
//   "swipeAngle": false,
//   "speed": 400,
//   "center": true,
//   "mouseDrag": true
// });

// END
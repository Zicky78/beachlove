(function() {
	'use strict';

	var section = document.querySelectorAll('.scroll_target');
	var sections = {};
	var i = 0;

	Array.prototype.forEach.call(section, function(e) {
		sections[e.id] = e.offsetTop;
	});

	window.onscroll = function() {
		var scrollPosition =
			document.documentElement.scrollTop || document.body.scrollTop;
		console.log('scroll:', scrollPosition);

		for (i in sections) {
			console.log('Section:', sections[i]);
			if (sections[i] <= scrollPosition) {
				// if (sections[i] === 767) {
				// 	document.querySelectorAll('a').forEach(link => {
				// 		// link.style.color = 'black';
				// 	});
				// } else if (sections[i] === 0) {
				// 	document.querySelectorAll('a').forEach(link => {
				// 		// link.style.color = 'white';
				// 	});
				// } else if (
				// 	scrollPosition >= 2700 &&
				// 	scrollPosition <= 3006
				// ) {
				// 	document.querySelectorAll('a').forEach(link => {
				// 		// link.style.color = 'white';
				// 	});
				// } else {
				// 	document.querySelectorAll('a').forEach(link => {
				// 		// link.style.color = 'black';
				// 	});
				// }
				document
					.querySelector('.active')
					.setAttribute('class', 'nav_link');
				document
					.querySelector('a[href*=' + i + ']')
					.setAttribute('class', 'active');
			}
		}
	};
})();

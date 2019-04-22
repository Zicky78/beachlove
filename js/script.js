(function() {
    'use strict';
  
    var section = document.querySelectorAll(".scroll_target");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').setAttribute('class', 'nav_link');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
  })();
  
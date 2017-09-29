$(document).ready(function(){
  $("#carousel").owlCarousel({
  	items: 1,
  	dots: false,
    center: true,
  	nav: true,
  	navText: [ "" , "" ],
  });
});

$(document).ready(function(){
  $("#baner").owlCarousel({
  	items: 1,
  	dots: false,
  	nav: true,
  	navText: [ "" , "" ],
  	loop: true,
  	mouseDrag: false,
  	autoplay: true,
  	autoplayHoverPause: true,
  	autoplaySpeed: true,
  	animateOut: 'fadeOut',
  });
});

$(document).ready(function(){
  $("#partners").owlCarousel({
    items: 5,
    dots: false,
    nav: false,
    center: true,
    margin: 100,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2500,
  });
});

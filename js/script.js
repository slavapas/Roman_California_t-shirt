$(document).ready(function () {
    
    $('.menu-wrap .toggler').click(function () {
        $('.logo').toggleClass('white black');       
        $('.mymenu').toggleClass('show closed');        
        $('.mymenu_list').toggleClass('dsp-bl');
        $('li').toggleClass('menu-open');        
        $('.details').toggleClass('block');        
    });
});

// Mouse Circle
// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

function moveCircle(e) {
	TweenLite.to($circle, 0.6, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

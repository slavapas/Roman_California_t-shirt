$(document).ready(function () {

    $('.menu-wrap .toggler').click(function () {
        $('.logo_text a').toggleClass('white black');       
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

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});
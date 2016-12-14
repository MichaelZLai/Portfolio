//Scroll Navigation feature
$(window).scroll(function() {
  if ($(document).scrollTop() > 480) {
    $("nav").addClass("showNav");
  } else {
    $("nav").removeClass("showNav");
  }
});

//Block Nav feature

if($(window).width() > 736){
  $("nav .navbar .showNav").show();
}

//have landing page at the top

$(document).ready(function(){
    $(this).scrollTop(0);
});



$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})

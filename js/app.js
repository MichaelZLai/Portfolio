//Scroll Navigation feature
$(window).scroll( _ => {
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

//Have landing page at the top

$(document).ready( _ =>{
    $(this).scrollTop(0);
});


//Preloader functionality
$(window).on('load', _ => { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})

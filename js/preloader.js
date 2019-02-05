$(window).on('load', _ => {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

});


//Preloader functionality
// $(window).on('load', _ => { // makes sure the whole site is loaded
//     $('#status').fadeOut(); // will first fade out the loading animation
//     $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
//     $('body').delay(350).css({'overflow':'visible'});
// })

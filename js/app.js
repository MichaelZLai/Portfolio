//Scroll Navigation feature
$(window).scroll(function() {
  if ($(document).scrollTop() > 480) {
    $("nav").addClass("showNav");
  } else {
    $("nav").removeClass("showNav");
  }
});

//Scroll Navigation feature
$(window).scroll(function() {
  if ($(document).scrollTop() > 520) {
    $("nav").addClass("showNav");
  } else {
    $("nav").removeClass("showNav");
  }
});

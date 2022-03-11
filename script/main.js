// navbar 

$(document).ready(function () {
  $.clicked = false;

  $(".navbar-toggler").click(function (e) {
    if ($.clicked) {
      $(".navbar").css("background", "transparent")
      $.clicked = false;
    } else {
      $(".navbar").css("background", "#343a40")
      $.clicked = true;
    }
  });
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-default");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
    });
  });

});




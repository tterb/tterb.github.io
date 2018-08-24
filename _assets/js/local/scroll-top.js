if ($("#back-to-top").length) {
  var scrollTrigger = 200,
  checkOffset = function() {
    var b = $(document).height() - $(window).scrollTop()
    $(window).scroll(function() {
      if ($(window).scrollTop() > scrollTrigger) {
        $("#back-to-top").addClass("show")
      } else {
        $("#back-to-top").removeClass("show")
      }
    });
  };
  checkOffset();
  $(window).on("scroll", function() {
    checkOffset()
  });
  $("#back-to-top").on("click", function(a) {
    a.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 700);
  });
};

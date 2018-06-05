if ($("#back-to-top").length) {
  var scrollTrigger = 200,
  backToTop = function() {
    var a = $(window).scrollTop();
    var b = (Math.min($(document).height(), $(window).height()) - 1250);
    $(window).scroll(function() {
      if (a > scrollTrigger && a < b) {
        $("#back-to-top").addClass("show")
      } else {
        $("#back-to-top").removeClass("show")
      }
    });
  };
  backToTop();
  $(window).on("scroll", function() {
    backToTop()
  });
  $("#back-to-top").on("click", function(a) {
    a.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 700);
  });
};

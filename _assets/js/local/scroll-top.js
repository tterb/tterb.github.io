if ($('#back-to-top').length) {
  var offset = 1400;
  var scrollTrigger = 200;
  checkOffset = () => {
    var pos = $(document).height() - $(window).scrollTop();
    var bottom = $(document).height() - offset;
    $(window).scroll(() => {
      if ($(window).scrollTop() > scrollTrigger) {
        $('#back-to-top').addClass('show');
        if (pos > offset) {
          $('#back-to-top').css({ position: 'fixed' });
          $('#back-to-top').css({ transform: 'translateY(0)' });
        } else {
          $('#back-to-top').css({ position: 'absolute' });
          $('#back-to-top').css({ transform: `translateY(${bottom}px)` });
        }
      } else {
        $('#back-to-top').removeClass('show');
      }
    });
  };
  checkOffset();
  $(window).on('scroll', () => {
    checkOffset();
  });
  $('#back-to-top').on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
};

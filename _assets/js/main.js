(function($) {
  skel.breakpoints({
    xlarge:	'(max-width: 1680px)',
    large:	'(max-width: 1280px)',
    medium:	'(max-width: 980px)',
    small:	'(max-width: 736px)',
    xsmall:	'(max-width: 480px)'
  });
  $(function() {
    var	$window = $(window),
      $body = $('body'),
      $wrapper = $('#page-wrapper'),
      $banner = $('#banner'),
      $header = $('#header');
      $body.addClass('is-loading');
      $inner = $('#banner .inner, #banner .scroll-btn');
      $inner.hide()
      $window.on('load', function() {
        window.setTimeout(function() {
          $inner.show()
          $body.removeClass('is-loading')
      }, 10);
    });

    // Mobile
    if (skel.vars.mobile) {
      $body.addClass('is-mobile');
      if($body.hasClass('landing')) {
        $('#menu-alt').css('display','none');
        if($('#menuToggle').length) {
          $('#menuToggle').css('display','block');
        } else {
          $('<a id="menuToggle" class="menu-toggle" href="#menu"><span></span></a>').appendTo($('nav .special'));
        }
      }
    } else {
      skel
        .on('-small !small', function() {
          $body.removeClass('is-mobile');
          if($body.hasClass('landing')) {
            $('.menu-toggle').css('display', 'none');
            $('#menu-alt').css('display', 'block');
          }
        })
        .on('+small', function() {
          $body.addClass('is-mobile');
          $('#menu-alt').css('display','none');
          if($body.hasClass('landing')) {
            if($('#menuToggle').length) {
              $('#menuToggle').css('display','block');
            } else {
              $('<a id="menuToggle" class="menu-toggle" href="#menu"><span></span></a>').appendTo($('nav .special'));
            }
          }
        });
    }
    // Fix: Placeholder polyfill.
    $('form').placeholder();
    skel.on('+medium -medium', function() {
      $.prioritize('.important\\28 medium\\29',
        skel.breakpoint('medium').active);
    });

    $('.scrolly').scrolly({
      speed: 1200,
      offset: $header.outerHeight()
    });

    $('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'right',
      target: $body,
      visibleClass: 'is-menu-visible'
    });

    if (skel.vars.IEVersion < 9)
        $header.removeClass('alt');

    if ($banner.length > 0 &&	$header.hasClass('alt')) {
       $window.on('resize', function() { $window.trigger('scroll') });

      $banner.scrollex({
        bottom: $header.outerHeight() + 10,
        terminate: function() { $header.removeClass('alt') },
        enter: function() { $header.addClass('alt') },
        leave: function() { $header.removeClass('alt') }
      })
    }
  });
  
  // Scroll Reveal config
  (function ($) {
    "use strict";
    window.sr = ScrollReveal({ duration: 1000, reset: false });
    sr.reveal('#one .inner', 10);
    sr.reveal('#two .inner', 10);
    sr.reveal('#back-to-top', 25);

    $('.filter li').on('click', function() {
      var $this = $(this),
      isActive = $this.hasClass( 'active' ),
      group = isActive ? 'all' : $this.data('group');
      if (!isActive) {
        $('.filter .active').removeClass('active');
      }
      $this.toggleClass('active');
    });
  }(jQuery));

  // Asychronous Google-font loading
  $(function() {
    var $fonts = 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Montserrat:400,400i,600,600i,800,800i|Spectral:300,300i,500,500i,700,700i|Source+Code+Pro:300,400,600,700';
    document.createStyleSheet ? document.createStyleSheet($fonts) : $('head').append($('<link rel="stylesheet" href="' + $fonts + '" type="text/css" media="screen" />'))
  })

  // Improve code-block formatting
  $(document).ready(function() {
    $('.highlighter-rouge').each(function() {
      if($(this).height() > 55)
        $(this).addClass('code-block');
    });
  });
  
  // Magnific-Popup config
  $(document).ready(function() {
    $('.written-content').children('img').each(function() {
      $(this).attr('class','post-img')
      $(this).attr('data-mfp-src',$(this).attr('src'))
      $(this).attr('data-full',$(this).attr('src'))
      $(this).attr('desc',$(this).attr('alt'))
      $(this).attr('data-effect','mfp-zoom-in')
    });
    
    $('.design-tiles').magnificPopup({
      delegate: '.mask',
      type: 'image',
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        tPrev: 'Previous', // title for left button
        tNext: 'Next',     // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>'    // markup of counter
      },
      image: {
        markup: '<div class="mfp-figure">'+'<div class="mfp-close fa fa-close"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-desc"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</div>',
        titleSrc: 'title',
        verticalFit: true,
        preloader: true
      },
      removalDelay: 400
    });
    $('.written-content').magnificPopup({ 
      delegate: '.post-img',
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        tPrev: 'Previous', // title for left button
        tNext: 'Next',     // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>'    // markup of counter
      },
      image: {
        markup: '<div class="mfp-figure">'+'<div class="mfp-close fa fa-close"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-desc"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</div>',
        titleSrc: 'title',
        verticalFit: true,
        preloader: true
      },
      removalDelay: 400
    });
  });
  
  // $('.design-tiles .tile').poptrox()
})(jQuery);

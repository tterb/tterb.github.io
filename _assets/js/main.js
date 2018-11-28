
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
      // $('body').addClass('is-mobile');
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
    // Fix: Placeholder polyfill
    if($('form').length) {
      $('form').placeholder();
      skel.on('+medium -medium', function() {
        $.prioritize('.important\\28 medium\\29',
          skel.breakpoint('medium').active);
      });
    }

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
    window.sr2 = ScrollReveal({ duration: 2000, reset: false });
    if ($('body.landing').length) {
      sr.reveal('#one .inner', 20);
      sr.reveal('#two .inner', 20);
      sr.reveal('.tile', 20);
    } else if ($('body.blog').length) {
      sr.reveal('post-card', 20);
    }
    // else if ($('.post').length) {
    //   sr.reveal('#back-to-top', 25);
    // }
    // else if ($('.blog').length) {
    //   sr2.reveal('.boxer', 25);
    // }
    // sr.reveal('#three .tile', 25);
    // sr.reveal('#three', 10);
    $('.filter li').on('click', function() {
      var $this = $(this),
      isActive = $this.hasClass( 'active' ),
      group = isActive ? 'all' : $this.data('group');
      if (!isActive) {
        $('.filter .active').removeClass('active');
      }
      $this.toggleClass('active');
    });
    
    $('.search-overlay').on('click', function() {
      $('body').removeClass('search-overlay');
    });
  }(jQuery));

  // Improve code-block formatting
  $(document).ready(function() {
    $('.highlighter-rouge').each(function() {
      if($(this).height() > 65)
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
        markup: '<div class="mfp-figure">'+'<div class="mfp-close fas fa-times"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-desc"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</div>',
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
        markup: '<div class="mfp-figure">'+'<div class="mfp-close fas fa-times"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-desc"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</div>',
        titleSrc: 'title',
        verticalFit: true,
        preloader: true
      },
      removalDelay: 400
    });
  });

//   $.fn.writeText = function(content) {
//     var contentArray = content.split(""),
//         current = 0,
//         elem = this;
//     setInterval(function() {
//       if (current < contentArray.length) {
//         elem.text(elem.text() + contentArray[current++]);
//       }
//     }, 20);
//   };
// 
//   function getRandom(arr, n) {
//     var result = new Array(n),
//         len = arr.length,
//         taken = new Array(len);
//     if (n > len)
//       throw new RangeError("getRandom: more elements taken than available");
//     while (n--) {
//       var x = Math.floor(Math.random() * len);
//       result[n] = arr[x in taken ? taken[x] : x];
//       taken[x] = --len in taken ? taken[len] : len;
//     }
//     return result;
//   }
// 
// var i = 0;
// var roles = ["Developer", "Designer", "Student", "Code Monkey"];
// loop();
// function loop() {
//   // $('.role').text('').writeText(roles[i]);
//   // temp = getRandom(roles, 3);
//   var roles = ["Developer", "Designer", "Student", "Code Monkey"];
//   index = 0;
//   while(index < 3) {
//     $('#role'+String(index+1)).text('').writeText(roles[index]);
//     index++;
//   }
//   (i < roles.length - 1) ? i++ : i = 0;
//   console.log (i +", "+roles.length)
//   // setTimeout(loop, 4000); // call myself in 3 seconds time if required
// };
})(jQuery);


/* sweetScroll load */
// document.addEventListener("DOMContentLoaded", () => {
//   const sweetScroll = new SweetScroll({ trigger: '.scroll-btn' });
// }, false);

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
    if ($('body.landing').length) {
      sr.reveal('#one .inner', 10);
      sr.reveal('#two .inner', 10);
    }
    else if ($('.post').length) {
      sr.reveal('#back-to-top', 25);
    }
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
  }(jQuery));

  // Asychronous Google-font loading
  $(function() {
    var $fonts = 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Spectral:300,300i,500,500i,700,700i|Source+Code+Pro:300,400,600,700';
    document.createStyleSheet ? document.createStyleSheet($fonts) : $('head').append($('<link rel="stylesheet" href="' + $fonts + '" type="text/css" media="screen" />'))
  })

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
  
  // var filterizd = $('.filter-container').filterizr({
  //   animationDuration: 0.5,    // in seconds
  //   filter: 'all',             // Initial filter
  //   callbacks: { 
  //     onFilteringStart: function() { },
  //     onFilteringEnd: function() { alignTiles() },
  //     onShufflingStart: function() { },
  //     onShufflingEnd: function() { alignTiles() },
  //     onSortingStart: function() { },
  //     onSortingEnd: function() { alignTiles() }
  //   },
  //   controlsSelector: '',      // Selector for custom controls
  //   delay: 0,                  // Transition delay in ms
  //   delayMode: 'progressive',  // 'progressive' or 'alternate'
  //   easing: 'ease-out',
  //   filterOutCss: {            // Filtering out animation
  //     // position: 'relative',
  //     opacity: 0,
  //     margin: '0 0.025em',
  //     transform: 'translate3d(0)'
  //     // transform: 'scale(0.5)'
  //   },
  //   filterInCss: {             // Filtering in animation
  //     // position: 'relative',
  //     opacity: 0,
  //     margin: '0 0.025em',
  //     transform: 'translate3d(0)'
  //     // transform: 'scale(1)',
  //   },
  //   layout: 'sameSize',        // See layouts
  //   multifilterLogicalOperator: 'or',
  //   selector: '.filter-container',
  //   setupControls: true // Should be false if controlsSelector is set
  // });
  
  // $('.tile').mouseenter(function() {
  //   // console.log('mouseover');
  //   tiles = getValues();
  //   target = $(this);
  //   targetIndex = 0;
  //   $(tiles).each(function() {
  //     if(target == $(this).element) {
  //       targetIndex = $(this).index;
  //     }
  //   });
  //   console.log(targetIndex);
  //   var mod = parseInt(targetIndex/2);
  //   $('.tile').each(function(index) {
  //     if(mod < parseInt(index/2)) {
  //       tiles[index].y += 100;
  //       $(this).css('transform', 'translateY('+tiles[index].y+')');
  //     }
  //   });
  // });
  
  // function getValues() {
  //   var tiles = [];
  //   $('.tile').each(function(index) {
  //     var matrix = $(this).css('transform').replace(/[^0-9\-.,]/g, '').split(',');
  //     var tile = {
  //       index: index,
  //       element: $(this),
  //       x: parseFloat(matrix[12] || matrix[4]),
  //       y: parseFloat(matrix[13] || matrix[5])
  //     };
  //     tiles.push(tile);
  //   });
  //   return tiles;
  // }
  
  // alignTiles();
  // 
  // function alignTiles(row) {
  //   row = row || 2;
  //   var tiles = $('.tile');
  //   $('.tile.top').removeClass('top');
  //   for(var i = 0; i < tiles.length; i++) {
  //     // tiles.eq(i).css('transform', '');
  //     if(i < row) {
  //       tiles.eq(i).addClass('top');
  //     }
  //   }
  // }
  
  // $('.design-tiles .tile').poptrox()
})(jQuery);

var toggleNav = $('.js-nav-open');
var toggleNavDropdown = $('.js-nav-dropdown');
var playVid = $('.js-video-player');
var navItem = $('.nav-bar__item');

toggleNav.click(function() {
  $(this).toggleClass('is-open');
  var ul = $(this).siblings('ul');
  ul.toggleClass('show');
});

toggleNavDropdown.click(function() {
  $(this).toggleClass('is-open');
  var ul = $(this).children('.dropdown');
  ul.toggleClass('show');
});

playVid.click(function() {
  $(this).toggleClass('is-active');
  $('.kubrick').toggleClass('video-is-active');
});

setTimeout(function() {
  $('.av-loader').replaceWith('<div class="av-splash">Play</div>');
}, 5000);

// Used to track the enabling of hover effects
$('body').addClass('is-not-scrolling');
var scrollingTolerance = 5,
    banner = $('header[role="banner"]');

var latestKnownScrollTop = 0, ticking = false;

var $window = $(window);

$window.on('scroll', function() {
  latestKnownScrollTop = $window.scrollTop();

  requestTick();
});

function requestTick() {
    if(typeof window.requestAnimationFrame === 'undefined')
    {
      updateNavScrolling();
      return;
    }

    if(!ticking) {
      window.requestAnimationFrame(updateNavScrolling);
    }

    ticking = true;
}

function updateNavScrolling() {

    ticking = false;

    var body = $('body');
    var scrollPos = latestKnownScrollTop;

    if(scrollPos >= scrollingTolerance) {
      $('.fa-chevron-down').hide()

        body.addClass('is-scrolling');
        body.removeClass('is-not-scrolling');
        $('.js-nav-bar').removeClass('show');
        $('.js-nav-open').removeClass('is-open');

    } else {
        body.removeClass('is-scrolling');
        body.addClass('is-not-scrolling');
        $('.js-nav-bar').addClass('show');
        $('.js-nav-open').addClass('is-open');
    }

  };


$(function() {
    var headerX = $(".scrollBorder");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if (scroll >= 50) {
            headerX.addClass("scrolled");
            headerX.removeClass ('scrolledBack')
        } else {
            headerX.removeClass("scrolled");
            headerX.addClass("scrolledBack");
        }
    });

});

(function ($) {
  // Caption limit
  $(function () {
    $('#posts .post').each( function () {
      var $post = $(this),
          caption = $post.find('figcaption p'),
          capLength = caption.text().length;
      if (capLength > 100) {
        caption.text(caption.text().substring(0, 100) + '...');
      }
    });
  });
  // Masonry
  $(function () {
    // if($('#divfour').is(':visible')){
    //   alert("hello")
    // }
		var $grid = $('#posts').imagesLoaded(function () {
			$grid.isotope({
				itemSelector: '.post',
				percentPosition: true,
				transitionDuration: '0.2s',
				masonry: {
					columnWidth: '.post',
					gutter: 25
				}
			});
		});
	});
};

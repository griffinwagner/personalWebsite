console.log($('#divfour').visible(true))

$.fn.isInViewport = function() {
    var elementTop = $("#divfour").offset().top;
    var elementBottom = elementTop + $("#divfour").outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
    
};

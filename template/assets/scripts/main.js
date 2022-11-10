var $ = jQuery.noConflict();
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

(function() {
    var app = {
        init: function(){
            this.hamburger();
        },

        hamburger: function(){
            var button = $('body').find('.hamburger');
            var menu = $('body').find('.menu');

            button.on('click', function() {
                $(this).toggleClass('is-active');
                menu.toggleClass('active');
            });
        },
    }
    $(document).ready(function(){
        app.init();
    });
}());
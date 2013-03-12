(function ($, undefined) {
    $('.nav')
        .find('li').removeClass('active')
        .filter(function () {
            var $el = $(this),
                links = $el.find('a'),
                matches = false;

            for (var i = 0, l = links.length; i < l; i++) {
                var href = links[i].href;

                if (window.location.href === href) {
                    matches = true;
                    break;
                }
            }

            return matches;
        })
        .addClass('active');

}(window.jQuery));
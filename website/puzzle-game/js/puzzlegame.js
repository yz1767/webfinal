(function($) {

    var wookmark;

    $('#gallery-show').magnificPopup({
        delegate: 'li:not(.inactive) a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    imagesLoaded('#gallery-show', function() {
        wookmark = new Wookmark('#gallery-show', {
            offset: 20,
            fillEmptySpace: true,
            autoResize: true,
            align: 'center'
        });
    });

    var $filters = $('#filters li');
    var onClickFilter = function(event) {
        var $item = $(event.currentTarget),
            itemActive = $item.hasClass('active');
        if (!itemActive) {
            $filters.removeClass('active');
            itemActive = true;
        } else {
            itemActive = false;
        }
        $item.toggleClass('active');
        wookmark.filter(itemActive ? [$item.data('filter')] : []);
    }
    $('#filters').on('click.wookmark-filter', 'li', onClickFilter);
})(jQuery);

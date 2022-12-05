( function( $ ) {
  'use strict'; // Start of use strict

   $(function() {
    function ratingEnable() {
        $('#rating-1to10').barrating('show', {
            theme: 'bars-1to10'
        });

        $('#rating-movie').barrating('show', {
            theme: 'bars-movie'
        });

        $('#rating-movie').barrating('set', 'Mediocre');

        $('#rating-square').barrating('show', {
            theme: 'bars-square',
            showValues: true,
            showSelectedRating: false
        });

        $('#rating-pill').barrating('show', {
            theme: 'bars-pill',
            initialRating: 'A',
            showValues: true,
            showSelectedRating: false,
            allowEmpty: true,
            emptyValue: '-- no rating selected --',
            onSelect: function(value, text) {
                alert('Selected rating: ' + value);
            }
        });

        $('#rating-reversed').barrating('show', {
            theme: 'bars-reversed',
            showSelectedRating: true,
            reverse: true
        });

        $('#rating-horizontal').barrating('show', {
            theme: 'bars-horizontal',
            reverse: true,
            hoverState: false
        });

        $('#rating-fontawesome').barrating({
            theme: 'fontawesome-stars',
            showSelectedRating: false
        });

        $('#rating-css').barrating({
            theme: 'css-stars',
            showSelectedRating: false
        });

        var currentRating = $('#rating-fontawesome-o').data('current-rating');

        $('.stars-rating-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);

        $('.stars-rating-fontawesome-o .clear-rating').on('click', function(event) {
            event.preventDefault();

            $('#rating-fontawesome-o')
                .barrating('clear');
        });

        $('#rating-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function(value, text) {
                if (!value) {
                    $('#rating-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-rating-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-rating-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function(value, text) {
                $('.stars-rating-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });
    }

    function ratingDisable() {
        $('select').barrating('destroy');
    }

    $('.rating-enable').click(function(event) {
        event.preventDefault();

        ratingEnable();

        $(this).addClass('deactivated');
        $('.rating-disable').removeClass('deactivated');
    });

    $('.rating-disable').click(function(event) {
        event.preventDefault();

        ratingDisable();

        $(this).addClass('deactivated');
        $('.rating-enable').removeClass('deactivated');
    });

    ratingEnable();
});

} )( jQuery ); // End of use strict
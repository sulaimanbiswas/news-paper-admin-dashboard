( function( $ ) {
  'use strict'; // Start of use strict

    $(function() {
        $('#cp1').colorpicker();
    });

    $(function() {
        $('#cp3').colorpicker({
            color: '#AA3399',
            format: 'rgb'
        });
    });

    $(function() {
        $('#cp4').colorpicker().on('changeColor', function(e) {
            $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
        });
    });

    $(function() {
        $('#cp5').colorpicker({
            color: "transparent",
            format: "hex"
        });
    });

    $(function() {
        $('#cp7').colorpicker({
            color: '#ffaa00',
            container: true,
            inline: true
        });
    });

    $(function() {
        $('#cp8').colorpicker({
            colorSelectors: {
                'black': '#000000',
                'white': '#ffffff',
                'red': '#FF0000',
                'default': '#777777',
                'primary': '#337ab7',
                'success': '#5cb85c',
                'info': '#5bc0de',
                'warning': '#f0ad4e',
                'danger': '#d9534f'
            }
        });
    });

    $(function() {
        $('#cp9').colorpicker({
            customClass: 'colorpicker-2x',
            sliders: {
                saturation: {
                    maxLeft: 200,
                    maxTop: 200
                },
                hue: {
                    maxTop: 200
                },
                alpha: {
                    maxTop: 200
                }
            }
        });
    });

    $(function() {
        $(".disable-button").click(function(e) {
            e.preventDefault();
            $("#cp10").colorpicker('disable');
        });

        $(".enable-button").click(function(e) {
            e.preventDefault();
            $("#cp10").colorpicker('enable');
        });
        $('#cp10').colorpicker();
    });

} )( jQuery ); // End of use strict
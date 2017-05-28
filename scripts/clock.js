var clock;
$('.stop').hide();

$(document).ready(function () {

    clock = $('.clock').FlipClock(1500, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            start: function () {
                $('.message').html('The clock has started!');
            }
        }
    });

    $('.start').click(function (e) {
        clock.start();
        $('.start').hide();
        $('.stop').show();
    });
        
    $('.stop').click(function() {
        clock.stop();
        $('.stop').hide();
        $('.start').show();
    });
    
    $('.reset').click(function() {
        clock.setTime(1500);
        $('.message').html('');
    });
});
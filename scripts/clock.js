var workClock, breakClock;

$(document).ready(function () {

    workClock = $('.work-clock').FlipClock(1500, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false
    });
    breakClock = $('.break-clock').FlipClock(300, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false

    });
    $('.start').click(function (e) {
        workClock.start();
    });

    $('.stop').click(function () {
        workClock.stop();
    });

    $('.reset').click(function () {
        workClock.setTime(1500);
        $('.message').html('');
    });
});
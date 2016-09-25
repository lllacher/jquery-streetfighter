$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.ryu-cool').hide();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    });
});
$(document).keypress(function(e) {
    if(e.which == 88+32) {
        $('.ryu-still').hide();
        $('.ryu-ready').hide()
        $('.ryu-cool').show();
    }
});
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
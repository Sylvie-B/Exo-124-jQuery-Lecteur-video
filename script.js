
// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();

let play = $('.toggle');
let nav = $('.player__button');

play.click(function () {
    if(play.text() === "►"){
        player.get(0).play();
        play.text('||');
    }
    else {
        player.get(0).pause();
        play.text('►');
    }
})


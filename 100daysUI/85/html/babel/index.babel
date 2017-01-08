var card = $('.card');
var infos = $('.info-list li');
var nav = $('.navigation li');

var animating = false;

showItem(0);
renderTakenSeats();


$('.navigation').on('click', 'li:not(.current)', function() {
    var index = $(this).index();
    showItem(index);
});

$(document).on('keydown', function(e) {
    if (!animating) {
        var index = infos.filter('.current').index();
        if (e.keyCode === 37 && index > 0) {
            // left arrow
            animating = true;
            showItem(index - 1);
        } else if (e.keyCode === 39 && index < infos.length - 1) {
            // right arrow
            animating = true;
            showItem(index + 1);
        }
    }
});

$(document).on('transitionend', '.current', function() {
    animating = false;
});

$(document).on('click', '.actions .cart, .booking-form .cancel', function() {
    $('.booking-form').toggleClass('visible');
});

$(document).on('click', '.seats button:not(.taken)', function() {
    $(this).toggleClass('selected');
});

$(document).on('submit', 'form', function(e) {
    e.preventDefault();
});


function showItem(index) {
    var info = infos.removeClass('current').eq(index).addClass('current');
    nav.removeClass('current').eq(index).addClass('current');

    infos.removeClass('move-left');
    info.prevAll().addClass('move-left');

    var background = info.find('img').attr('src');
    card.css('background-image', `url("${ background }")`);

    var rating = info.find('.rating').text();
    card.find('.rating-container').text(rating);
}


function renderTakenSeats() {
    var seats = $('.booking-form .seats button');
    var seatsCount = seats.length;
    var n = Math.random() * 10 + 5;
    for (let i = 0; i < n; i++) {
        seats.eq(Math.floor(Math.random() * seatsCount)).addClass('taken');
    }
}

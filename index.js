


let message = document.querySelector(".message")

let counter = 100;

$(".open").click(function () {
    $(".nav").animate({ width: 'toggle' }, 250);
    $(".list").toggleClass("move-right");
});


$(".detailsColor h3").click(function () {
    $(this).next("p").slideToggle();
});


function updateCountdown() {
    var eventDate = new Date("2024-1-28 00:00:00 GMT+0000").getTime();
    var currentDate = new Date().getTime();

    var distance = eventDate - currentDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".day").text(days + " D");
    $(".hour").text(hours + " H");
    $(".minutes").text(minutes + " M");
    $(".second").text(seconds + " S");
}

setInterval(updateCountdown, 1000);


$(document).ready(updateCountdown);


$(".message").keypress(function (e) {
    counter--;
    $(".counter").html(counter);

})





$(".message").keydown(function (event) {
    if (event.keyCode === 8) {
        if (counter > 99) {
            $(".counter").html(100);
        }
        else {
            counter++;
            $(".counter").html(counter);
        }

    }
});


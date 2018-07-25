$(document).ready(function () {
    $('#welcomeDiv').show();
    let counter = 1000;
    $(".titleText").each(function () {
        $(this).fadeIn(counter);
        counter += 1000;
    });

    $("#image").fadeIn(6000);
});

function enterSite() {
    let counter = 0;
    let img = $("#image");
    let nav = $('#navbar');
    let titleTextArr = $(".titleText");
    let currentHeight = $('#welcomeDiv').css('height');
    $('#welcomeDiv').css('height', currentHeight);

    titleTextArr.each(function () {
        counter++
        $(this).fadeOut(1000);
        if (counter === 3) {
            img.delay(1000).animate({ marginLeft: '-=900px', marginTop: "+=20px", height: '50px', width: '50px' }, 2000, function () {
                nav.fadeIn(3000);
            });
        }
    });

   

};
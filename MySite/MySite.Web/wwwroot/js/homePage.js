$(document).ready(function () {
    $('#welcomeDiv').show();
    let counter = 5000;
    $(".titleText").each(function () {
        $(this).fadeIn(counter);
        counter += 5000;
    });

    $("#image").fadeIn(25000);
});

function enterSite() {
    let img = $("#image");
    let nav = $('#navbar');
    let currentHeight = $('#welcomeDiv').css('height');
    $('#welcomeDiv').css('height', currentHeight);

    $(".titleText").each(function () {
        $(this).fadeOut();
    });

    img.animate({ height: '50px', width: '50px' }, 1000);

    nav.fadeIn(3000);
      
};
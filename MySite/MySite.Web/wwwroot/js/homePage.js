$(document).ready(function () {

    let counter = 5000;
    $(".titleText").each(function () {
        $(this).fadeIn(counter);
        counter += 5000;
    });

    $("#image").fadeIn(25000);
    $("#enterButton").fadeIn(30000);
});

$("a#enterButton").click(function () {
    alert("CLICKED");
});

function enterSite() {
    alert("CLICKED");
};
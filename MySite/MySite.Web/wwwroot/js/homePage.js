
$(document).ready(function () {
    $('#welcomeDiv').show();
    let counter = 1000;
    $(".titleText").each(function () {
        $(this).fadeIn(counter);
        counter += 1000;
    });

    $("#image").fadeIn(6000);
});

function enterSite(isInWelcomePage) {

    if (isInWelcomePage) {
        let img = $("#image");
        let nav = $('#navbar');
        let titleTextArr = $(".titleText");
        let currentHeight = $('#welcomeDiv').css('height');
        $('#welcomeDiv').css('height', currentHeight);

        img.animate({ height: '0px', width: '0px' }, 2000, function () {
            titleTextArr.each(function () {
                $(this).delay(2000).fadeOut(1000, function () {
                    img.hide();
                    nav.fadeIn(3000, function () {
                        $('#headings').delay(2000).fadeIn(2000)
                    });
                });
            });
        });
    }

};

function showContacts() {
    $('#contactsDiv').fadeIn(1000);
    $('#navBrand').css('visibility', 'hidden');
}

function hideContacts() {
    $('#contactsDiv').fadeOut(1000);
    $('#navBrand').css('visibility', 'visible');
}


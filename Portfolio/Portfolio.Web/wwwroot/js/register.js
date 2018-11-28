
$(document).ready(function () {
    $('#regsterButton').click(function () {
        let obj = {

        };

        $.ajax({
            type: 'POST',
            url: '/account/register',
            success: function (result) {
                var s = '';
                for (var i = 0; i < result.length; i++) {
                    s += '<br>Id: ' + result[i].id;
                    s += '<br>Name: ' + result[i].name;
                    s += '<br>Price: ' + result[i].price;
                    s += '<br>------------------';
                }
                $('#result4').html(s);
            }
        });
    });

});
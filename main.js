jQuery(document).ready(function ($) {
    $.ajax({
        url: 'https://mysafeinfo.com/api/data?list=presidents&format=json&case=default',
        type: 'get',
        dataType: 'json'
    })

        .done(function (result) {
            result.forEach(function (e, i) {
                console.log(e.FullName);
            });

        });

});

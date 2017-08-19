$(document).ready(function () {

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    $.getJSON("js/recipes.json", function (result) {
        $('#recipe').append('<h2>' + result.recipes[0].name + '</h2>');
    });
});

$(document).ready(function () {
    $.getJSON(url("js/recipes.json"), function (result) {
        $('#recipes').html('test');
    });
});

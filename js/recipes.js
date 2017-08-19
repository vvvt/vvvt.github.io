$(document).ready(function () {
    $.getJSON("recipes.json", function (result) {
        $('#recipes').html('test');
    });
});

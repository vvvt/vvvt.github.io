$(document).ready(function () {
    $.getJSON("js/recipes.json", function (result) {
        $('#recipes').html('test');
    });
});

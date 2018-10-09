/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/

$(document).ready(function () {

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
            console.log("ajaxSetup done");
        }
    });

    var recJSON;

    $.getJSON("js/recipes.json", function (result) {
        recJSON = result;
        console.log("get JSON finished");
    });

    $('#rec1').click(function () {
        $('#recipe').empty()
            .append('<h2>' + recJSON.recipes[0].name + '</h2>')
            .append('<div class="img-container"><img src="' + recJSON.recipes[0].imgLink + '" /></div>')
            .append('<div id="ingredient-container"><div id="amount"></div><div id="ingredients"></div></div>')
            .append('<div id="instruction-container"></div>');
        for (let i = 0; i < recJSON.recipes[0].ingredients.length; i++) {
            $('#amount').append('<p>' + recJSON.recipes[0].ingredients[i].amount + '</p>');
            $('#ingredients').append('<p>' + recJSON.recipes[0].ingredients[i].name + '</p>');
        }
        for (let i = 0; i < recJSON.recipes[0].instructions.length; i++) {
            $('#instruction-container').append('<h3>Schritt ' + recJSON.recipes[0].instructions[i].step + '</h3>')
                .append('<p>' + recJSON.recipes[0].instructions[i].text + '</p>');
        }
    });

    $('#rec2').click(function () {
        $('#recipe').empty()
            .append('<h2>' + recJSON.recipes[1].name + '</h2>')
            .append('<div class="img-container"><img src="' + recJSON.recipes[1].imgLink + '" /></div>')
            .append('<div id="ingredient-container"><div id="amount"></div><div id="ingredients"></div></div>')
            .append('<div id="instruction-container"></div>');
        for (let i = 0; i < recJSON.recipes[1].ingredients.length; i++) {
            $('#amount').append('<p>' + recJSON.recipes[1].ingredients[i].amount + '</p>');
            $('#ingredients').append('<p>' + recJSON.recipes[1].ingredients[i].name + '</p>');
        }
        for (let i = 0; i < recJSON.recipes[1].instructions.length; i++) {
            $('#instruction-container').append('<h3>Schritt ' + recJSON.recipes[1].instructions[i].step + '</h3>')
                .append('<p>' + recJSON.recipes[1].instructions[i].text + '</p>');
        }
    });


});

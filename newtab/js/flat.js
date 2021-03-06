/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document, window*/

$(document).ready(function () {
    'use strict';

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json');
            }
        }
    });

    const search = getSearchJSON();

    function getSearchJSON() {
        let output;
        $.getJSON('js/search.json', function (result) {
            output = result;
        }).ready(function () {
            return output;
        });
    }

    $.getJSON('js/flat.json', function (result) {
        for (let i = 0; i < result.bookmarks.length; i++) {
            $('#bookmarks').append('<a class="bookmarks bookmark-item circular" href="' + result.bookmarks[i].link + '"><img class="icon" src="' + result.bookmarks[i].img + '" /></a>');
        }


        $('.bookmark-item').mouseenter(function () {
            $(this).animate({
                backgroundColor: result.bookmarks[$(this).index()].highlight
            }, "fast");
        }).mouseleave(function () {
            $(this).animate({
                backgroundColor: "white"
            }, "fast");
        });
    });

    $.getJSON('https://www.reddit.com/r/todayilearned/top.json?t=hour&limit=1', function (result) {
        $('#til').append('<a href="' + result.data.children[0].data.url + '"><p class="til-text">' + result.data.children[0].data.title + '</p></a>');
    });
    
    $.getJSON('js/data.json', function (result) {
        console.log(result);
    });

    function firstSubstring (subject) {
        for (let i = 0; subject.length; i++) {
            if (subject.substr(i, 1) === " ") {
                return subject.substr(0, i);
            }
        }
        return subject;
    };

    function secondSubstring (subject) {
        for (let i = 0; subject.length; i++) {
            if (subject.substr(i, 1) === " ") {
                return subject.substr(i + 1);
            }
        }
        return subject;
    };

    function switchEngine (qstring) {
        for (let i = 0; i < search.engines.length; i++) {
            if (qstring === search.engines[i].identifier) {
                $('#search-icon').attr("src", search.engines[i].img);
                return search.engines[i].url + secondSubstring($('#searchbar').val());
            } else {
                $('#search-icon').attr("src", "svg/search_black.svg");
            }
        }
        return "https://duckduckgo.com/?q=" + $('#searchbar').val();
    };

    $('#searchbar').keyup(function (event) {
        if (event.keyCode === 13) {
            $('#search-button').click();
        } else if (event.keyCode === 32) {
            switchEngine(firstSubstring($('#searchbar').val()));
        }
    });

    $('#search-button').click(function () {
        window.location = switchEngine(firstSubstring($('#searchbar').val()));
    });
});

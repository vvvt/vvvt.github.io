/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document*/

$(document).ready(function () {
    'use strict';

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json');
            }
        }
    });



    var i, search;

    $.getJSON('js/flat.json', function (result) {
        for (i = 0; i < result.bookmarks.length; i++) {
            $('#bookmarks').append('<a class="bookmarks bookmark-item circular" href="' + result.bookmarks[i].link + '"><img class="icon" src="' + result.bookmarks[i].img + '" /></a>');
        }
    });

    $.getJSON('https://www.reddit.com/r/todayilearned/top.json?t=hour&limit=1', function (result) {
        $('#til').append('<a href="' + result.data.children[0].data.url + '"><p class="til-text">' + result.data.children[0].data.title + '</p></a>');
    });

    $.getJSON('js/search.json', function (result) {
        search = result;
        console.log(search.engines.length);
    });

    var firstSubstring = function (subject) {
        for (i = 0; subject.length; i++) {
            if (subject.substr(i, 1) === " ") {
                return subject.substr(0, i);
            }
        }
        return subject;
    };

    $('#searchbar').keyup(function (event) {
        if (event.keyCode === 13) {
            $('#search-button').click();
        } else if (event.keyCode === 32) {
            console.log(firstSubstring($('#searchbar').val()));
        }
    });

    $('#search-button').click(function () {
        window.location.assign('http://www.mozilla.org');
    });
});

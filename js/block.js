/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document*/

$(document).ready(function () {
    'use strict';

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    var i;

    $.getJSON("js/bookmarks.json", function (result) {
        for (i = 0; i < result.bookmarks.length; i++) {
            $('#navbar').append('<a class="nav-item" href="' + result.bookmarks[i].link + '"><p class="linktext">' + result.bookmarks[i].title + '</p></a>');
        }
    });

    $.getJSON("https://www.reddit.com/r/todayilearned/top.json?t=hour&limit=1", function (result) {
        $('#tilText').html(result.data.children[0].data.title + ' <a href="' + result.data.children[0].data.url + '">&#119101;</a>');
    });
});

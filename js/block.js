/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/

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
        $('#navbar').append('<a id="til-wrapper" class="nav-item" href="' + result.data.children[0].data.url + '"><p id="til-text" class="linktext">' + result.data.children[0].data.title + '</p></a>');
    });
});

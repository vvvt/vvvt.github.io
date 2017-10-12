/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/

$(document).ready(function () {
    'use strict';

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
            console.log("ajaxSetup done");
        }
    });

    var i;

    $.getJSON("js/bookmarks.json", function (result) {
        for (i = 0; i < result.bookmarks.length; i++) {
            $('#navbar').append("<a class=\"nav-item\" href=\"" + result.bookmarks[i].link + "\">" + "<p class=\"linktext\">" + result.bookmarks[i].title + "</p></a>");
        }
    });

    $('.nav-item').mouseenter(function () {
        if (window.matchMedia("(min-width: 501px)").matches) {
            $(this).css({
                "background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))"
            });
        }
    });
    $('.nav-item').mouseleave(function () {
        if (window.matchMedia("(min-width: 501px)").matches) {
            $(this).css({
                "background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))"
            });
        }
    });

    $.getJSON("https://www.reddit.com/r/todayilearned/top.json?t=hour&limit=1", function (result) {
        $('#tilText').html(result.data.children[0].data.title + ' <a href="' + result.data.children[0].data.url + '">&#119101;</a>');
    });

    /*
    $.getJSON("https://www.reddit.com/r/OnePiece/hot.json?limit=1", function (result) {
        var firstEntry = result.data.children[0].data.title.substring(19,20);
        var secondEntry = result.data.children[1].data.title.substring(19,20);
        
        if(firstEntry !== "8" && secondEntry!== "8"){
            $('#chapterStatus').html("New Chapter is offline")
        }else{
            $('#chapterStatus').html("New Chapter is online")
        }
    });
    */
});

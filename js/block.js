$(document).ready(function () {
    'use strict';

    $("#todoList").customScrollbar();

    $('.nav-item').not('#todo').mouseenter(function () {
        if(window.matchMedia("(min-width: 501px)").matches){
            $(this).css({
                "background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))"
            });
        }
    });
    $('.nav-item').not('#todo').mouseleave(function () {
        if(window.matchMedia("(min-width: 501px)").matches){
            $(this).css({
                "background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))"
            });
        }
    });

    /*
    $.getJSON("https://www.reddit.com/r/todayilearned/top.json?t=hour&limit=1", function (result) {
        $('#greeting').html(result.data.children[0].data.title + ' <a href="' + result.data.children[0].data.url + '">&#119101;</a>');
    });
    */
    $.getJSON("https://www.reddit.com/r/OnePiece/hot.json?limit=1", function (result) {
        var firstEntry = result.data.children[0].data.title.substring(19,20);
        var secondEntry = result.data.children[1].data.title.substring(19,20);
        
        if(firstEntry !== "8" && secondEntry!== "8"){
            $('#greeting').html("New Chapter is still offline")
        }else{
            $('#greeting').html("New Chapter is online")
        }
    });
});

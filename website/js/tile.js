"use strict";

$(document).ready(function () {
    var zindex = 10;

    $(".grid-item").click(function () {
        var clickedElment = $(this);
        console.log(clickedElment);

        $(".grid-item").find("> .info").removeClass("show-info");
        $(".grid-item").find("> .info").addClass("hide-info");
        $(".grid-item").find("> .info button").css("visibility", "collapse");

        if (clickedElment.find("> .info").hasClass("hide-info")) {
            clickedElment.find("> .info").removeClass("hide-info");
            clickedElment.find("> .info").addClass("show-info");;
            clickedElment.find("> .info button").css("visibility", "visible");
        }
    });
});
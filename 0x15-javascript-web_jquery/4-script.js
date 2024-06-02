$(document).ready(function() {
    $("#toggle_header").click(function() {
        let header = $("header");
        if (header.hasClass("red")) {
            header.removeClass("red").addClass("green");
        } else if (header.hasClass("green")) {
            header.removeClass("green").addClass("red");
        } else {
            header.addClass("red");
        }
    });
});

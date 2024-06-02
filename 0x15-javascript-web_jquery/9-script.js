$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://hellosalut.stefanbohacek.dev/?lang=fr",
        success: function(data) {
            $("#hello").text(data.hello);
        }
    })
})

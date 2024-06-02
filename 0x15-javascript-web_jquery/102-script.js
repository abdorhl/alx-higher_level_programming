$(document).ready(function() {
    $("INPUT#btn_translate").click(() => {
        const lang = $("INPUT#language_code").val();
        $.ajax({
            type: "POST",
            url: `https://hellosalut.stefanbohacek.dev/?lang=${lang}`,
            success: function(data) {
                $("DIV#hello").text(data.hello);
            },
            error: () => {
                console.error("Error!");
            }
        });
    });
});

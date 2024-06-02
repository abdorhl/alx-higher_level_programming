$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        success: function(data) {
            const movies = data.results;
            $.each(movies, function(i, item) {
                $("#list_movies").append(`<li>${item.title}</li>`);
            });
        }
    });
});

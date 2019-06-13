function displayAllMovies() {
    $(".tableBody").empty(),
        $.ajax({
            method: "GET",
            url: "https://localhost:44365/api/movies",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $(data).each(function (key, value) {
                    $(".tableBody").append(
                        "<tr>" + "<td>" + value.Title + "</td>" +
                        "<td>" + value.Genre + "</td>" +
                        "<td>" + value.DirectorName + "</td>" +
                        "</tr>"
                    );
                })
            }
        });
}

function postMovie() {
    var newMovieTitle = $("#title")[0].value;
    var newGenre = $("#genre")[0].value;
    var newDirectorName = $("#directorName")[0].value;
    var data = { Title: newMovieTitle, Genre: newGenre, DirectorName: newDirectorName, MovieImage: null};
    $.post("https://localhost:44365/api/movies", data, function(response){
        console.log(response);
    }, "json");
}
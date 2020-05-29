
$(document).ready(function () {
    $("button").on("click", getDJ);
});

function getDJ() {


    $.get("https://icanhazdadjoke.com/", function (json) {
        // var data = JSON.parse(JSON.stringify(json));
        console.log(json);
        //     $(".joke").html(data.joke);
    });
}


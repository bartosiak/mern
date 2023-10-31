$(document).ready(function () {
    $("#btnGetData").click(function () {
        // wariant pierwszy
        // $.get("https://akademia108.pl/api/ajax/get-post.php")
        //     .done(function (data) {
        //         let newDiv = $("<div>");

        //         newDiv.html(`
        //             User-Id: ${data.userId}<br>
        //             Id: ${data.id}<br>
        //             Title: ${data.title}<br>
        //             Body: ${data.body}<br>
        //             <hr>
        //         `);

        //         $("body").append(newDiv);
        //     })
        //     .fail(function (error) {
        //         console.log(error);
        //     });

        // wariant drugi
        $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
            .done(function (data) {
                let newDiv = $("<div>");

                newDiv.html(`
                User-Id: ${data.userId}<br>
                Id: ${data.id}<br>
                Title: ${data.title}<br>
                Body: ${data.body}<br>
                <hr>
            `);

                $("body").append(newDiv);
            })
            .fail(function (error) {
                console.log(error);
            });
    });
});

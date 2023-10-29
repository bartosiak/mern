$(document).ready(function () {
    $(".accordion-item").click(function () {
        $(this).find(".accordion-content").slideToggle();

        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }
    });
});

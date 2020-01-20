/*Form focus on page*/
$("[data-form]").on("focus", function (event) {
    event.preventDefault();

    var parentForm = $(this).parent(".form__container");

    $(".form__container").removeClass("focus");
    $(parentForm).addClass("focus");
});



/*Form focus on modal*/
$("[data-modal]").on("focus", function (event) {
    event.preventDefault();

    var parentForm = $(this).parent(".form__container--modal");

    $(".form__container--modal").removeClass("focus--modal");
    $(parentForm).addClass("focus--modal");
})
$("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    var collapseId = $(this).data("collapse");

    $(".works__item-content").removeClass("active");
    $(collapseId).toggleClass("active");

})
$(document).ready(function () {

    $("button").on("click", function () {
        let value = $("input").val();
        let html = '<div class="item">' +
            '<div class="cancel">X</div>' +
            value +
            '</div>';

        $("#todo-container").append(html)


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})
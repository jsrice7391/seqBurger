$(document).ready(function() {

    $("#submitBurger").on("click", function(event) {
        event.preventDefault();
        let theData = $("#new_burger").val().trim();
        postTheData(theData);


    })

    $(".delete-burger").on("click", function() {
        let theData = $(this).data("id");
        deleteThis(theData);

    })

    function deleteThis(data) {
        $.ajax({
            type: "DELETE",
            url: "/api/burgers",
            data: {
                id: data
            }
        }).then(function() {
            console.log("Deleted")
        })
    }


    function postTheData(the_data) {
        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: {
                burger_name: the_data,
                complete: false
            }
        }).then(function() {
            location.reload();
        });
    }






});
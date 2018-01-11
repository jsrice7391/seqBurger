$(document).ready(function() {

    var theMain = $("#new_burger")
    theMain.focus();
    theMain.select();


    $.get("/api/burgers", function(data) {
        if (!data || !data.length) {
            $(".noBurger").html("<h3>Welcome to Eat-Da-Burger. Please enter your favorite burger </h3>")
            $(".burgerNew .burgerEaten").hide();
        } else {
            $(".burgerNew .burgerEaten").show();
        }
    })

    $("#submitBurger").on("click", function(event) {
        event.preventDefault();
        let theData = $("#new_burger").val().trim();
        postTheData(theData);


    })

    $(".delete-burger").on("click", function() {
        let theData = $(this).data("id");
        deleteThis(theData);
    })

    $(".change-status").on("click", function() {
        let theData = $(this).data("id");
        updateThis(theData);
    })



    function updateThis(data) {
        $.ajax({
            type: "PUT",
            url: "/api/burgers",
            data: {
                id: data
            }
        }).then(function() {
            console.log("Deleted")
            location.reload();

        })
    }


    function deleteThis(data) {
        $.ajax({
            type: "DELETE",
            url: "/api/burgers",
            data: {
                id: data
            }
        }).then(function() {
            console.log("Deleted")
            location.reload();

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
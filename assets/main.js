$(document).ready(function() {

    $("#submitBurger").on("click", function(event) {
        event.preventDefault();
        let theData = $("#new_burger").val().trim();
        postTheData(theData);


    })

    function postTheData(the_data) {
        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: {
                burger_name: the_data,
                complete: false
            }
        }).then(function() {
            alert("Success");

        });
    }






});
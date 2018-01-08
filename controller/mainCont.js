const db = require("../models");

console.log(db.Burger)

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            res.render("index", { burgers: burgers });
        })

    })

    app.get("/api/burgers/:id", function(req, res) {
        db.Burger.findById(req.body.id).then(function(burgers) {
            res.json(burgers);
        })
    })

    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            complete: req.body.complete
        }).then(function(dbTodo) {
            // We have access to the new todo as an argument inside of the callback function
            res.render("index", { burgers: dbTodo });

        });
    });
}
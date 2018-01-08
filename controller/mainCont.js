const db = require("../models");

console.log(db.Burger)

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            return res.render("index", { burgers });
        })
    })

    app.get("/api/burgers/:id", function(req, res) {
        db.Burger.findById(req.params.id).then(function(burgers) {
            res.json(burgers);
        })
    });

    // app.put("/api/burgers", function(req, res) {
    //     db.Burger.update({
    //         complete:
    //     })
    // });


    app.delete("/api/burgers", function(req, res) {
        db.Burger.delete({
            where: {
                id: req.params.id
            }
        }).then(function(burgers) {
            res.json(burgers)
        })
    });


    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            complete: req.body.complete
        }).then(function(dbTodo) {
            res.render("index", { burgers: dbTodo });
        });
    });
}
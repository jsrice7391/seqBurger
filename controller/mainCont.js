const db = require("../models");
module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            // var templateSpec = Handlebars.precompile('{{foo}}');

            // for (let b in burgers) {
            //     console.log(burgers[b].burger_name);

            return res.render("index", { burgers });
        })
    })

    app.get("/api/burgers/:id", function(req, res) {
        db.Burger.findById(req.params.id).then(function(burgers) {
            res.json(burgers);
        })
    });

    app.put("/api/burgers", function(req, res) {

        db.Burger.update({
            complete: true

        }, {
            where: {
                id: parseInt(req.body.id)
            }
        }).then(function(theData) {
            res.json(theData)
        })
    });



    app.delete("/api/burgers", function(req, res) {
        console.log(req)
        db.Burger.destroy({
            where: {
                id: parseInt(req.body.id)
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
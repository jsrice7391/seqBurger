module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    })
    return Burger;
}
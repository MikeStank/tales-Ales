module.exports = function(sequelize, DataTypes) {
    var Ales = sequelize.define("Ales", {
      // Giving the Ale model a name of type STRING
      name: DataTypes.STRING
    });
  
    Ales.associate = function(models) {
      // Associating Ales with Tales
      // When an Ales is deleted, also delete any associated Tales
      Ales.hasMany(models.Tales, {
        onDelete: "cascade"
      });
    };
  
    return Ales;
  };
  
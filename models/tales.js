module.exports = function(sequelize, DataTypes) {
    var Tales = sequelize.define("Tales", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
         
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      }
    });
  
    Tales.associate = function(models) {
      // We're saying that a Tale should belong to an Ale
      // A Tale can't be created without an Ale due to the foreign key constraint
      Tales.belongsTo(models.Ales, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  
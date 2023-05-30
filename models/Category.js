const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {}
  Category.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      typeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skateItem: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};

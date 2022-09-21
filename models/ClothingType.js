const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class ClothingType extends Model {}
  ClothingType.init(
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
    },
    {
      sequelize,
      modelName: "clothingType",
    }
  );
  return ClothingType;
};

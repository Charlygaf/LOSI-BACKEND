const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class SkatewareType extends Model {}

  SkatewareType.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      typeName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "skatewareType",
    }
  );
  return SkatewareType;
};

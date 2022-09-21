const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class SkateItem extends Model {}
  SkateItem.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SkateItem",
    }
  );
  return SkateItem;
};

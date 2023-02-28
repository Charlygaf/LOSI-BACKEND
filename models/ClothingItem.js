const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class ClothingItem extends Model {}
  ClothingItem.init(
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.BIGINT,
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
      discount: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "clothingItem",
    }
  );
  return ClothingItem;
};

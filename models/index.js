const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

const User = require("./User")(sequelize, Model, DataTypes);
const Art = require("./Art")(sequelize, Model, DataTypes);
const Video = require("./Video")(sequelize, Model, DataTypes);
const ClothingType = require("./ClothingType")(sequelize, Model, DataTypes);
const ClothingItem = require("./ClothingItem")(sequelize, Model, DataTypes);
const SkatewareType = require("./SkatewareType")(sequelize, Model, DataTypes);
const SkateItem = require("./SkateItem")(sequelize, Model, DataTypes);

ClothingType.hasMany(ClothingItem);
ClothingItem.belongsTo(ClothingType);
SkatewareType.hasMany(SkateItem);
SkateItem.belongsTo(SkatewareType);

module.exports = {
  sequelize,
  User,
  ClothingItem,
  ClothingType,
  SkateItem,
  SkatewareType,
  Art,
  Video,
};

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
const Video = require("./Video")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Stock = require("./Stock")(sequelize, Model, DataTypes);
const Item = require("./Item")(sequelize, Model, DataTypes);
const Art = require("./Art")(sequelize, Model, DataTypes);

Category.hasMany(Item);

Item.hasMany(Stock);
Stock.belongsTo(Item);

module.exports = {
  sequelize,
  User,
  Item,
  Category,
  Stock,
  Video,
  Art,
};

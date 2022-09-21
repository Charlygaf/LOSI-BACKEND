const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  User.beforeBulkCreate(async (users, options) => {
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });
  User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  return User;
};

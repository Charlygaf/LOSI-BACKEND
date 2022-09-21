const { User } = require("../models");

module.exports = async () => {
  try {
    const users = [
      {
        firstname: "Admin",
        lastname: "Admin",
        email: "admin@mail.com",
        password: "1234",
        isAdmin: true,
      },
      {
        firstname: "Admin2",
        lastname: "Admin2",
        email: "admin2@mail.com",
        password: "1234",
      },
      {
        firstname: "Pepe",
        lastname: "González",
        email: "pepe@mail.com",
        password: "1234",
        isAdmin: true,
      },
      {
        firstname: "User",
        lastname: "User",
        email: "user@mail.com",
        password: "1234",
      },
    ];

    await User.bulkCreate(users);
    console.log("[Seeders] Los usuarios fueron creados");
  } catch (error) {}
};

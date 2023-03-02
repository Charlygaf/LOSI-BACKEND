const { User } = require("../models");

module.exports = async () => {
  try {
    const users = [
      {
        firstname: "Carlos",
        lastname: "Garcia Arocena",
        email: "charlygaf@gmail.com",
        password: "1234",
        isAdmin: true,
      },
      {
        firstname: "thomas",
        lastname: "hughes",
        email: "thomih44@gmail.com ",
        password: "1234",
      },
      {
        firstname: "Pepe",
        lastname: "González",
        email: "pepe@mail.com",
        password: "1234",
        isAdmin: false,
      },
      {
        firstname: "juan",
        lastname: "User",
        email: "juan@mail.com",
        password: "1234",
        isAdmin: false,
      },
    ];

    await User.bulkCreate(users);
    console.log("[Seeders] Los usuarios fueron creados");
  } catch (error) {}
};

const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  try {
    await db.sequelize.sync({ force: true });
    console.log("[Database] ¡Las tablas fueron creadas!");
    await require("./seeders/userSeeder")();
    await require("./seeders/categoriesSeeder")();
    await require("./seeders/itemsSeeder")();
    await require("./seeders/artsSeeder")();
    await require("./seeders/videosSeeder")();
    await require("./seeders/stocksSeeder")();
  } catch (error) {
    console.log(error);
  }
};

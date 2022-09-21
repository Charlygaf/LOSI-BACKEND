const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  await require("./seeders/userSeeder")();
  await require("./seeders/clothingTypesSeeder")();
  await require("./seeders/colthingItemsSeeder")();
  await require("./seeders/skatewareTypesSeeder")();
  await require("./seeders/artsSeeder")();
  await require("./seeders/skateItemsSeeder")();
  await require("./seeders/videosSeeder")();
};

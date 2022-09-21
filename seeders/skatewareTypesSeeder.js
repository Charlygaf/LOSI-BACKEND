const { SkatewareType } = require("../models");
module.exports = async () => {
  try {
    const skatewareTypes = [
      { typeName: "Decks" },
      { typeName: "Ruedas" },
      { typeName: "Trucks" },
      { typeName: "Rulemanes" },
      { typeName: "Tornillos" },
      { typeName: "PoolShapes" },
    ];

    await SkatewareType.bulkCreate(skatewareTypes);
    console.log("[Seeders] Las skatewareTypes fueron creadas");
  } catch (error) {}
};

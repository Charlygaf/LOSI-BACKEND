const { Category } = require("../models");
module.exports = async () => {
  try {
    const categories = [
      { typeName: "Pantalones" },
      { typeName: "Remeras" },
      { typeName: "Camperas" },
      { typeName: "Buzos" },
      { typeName: "Accesorios" },
      { typeName: "Camisas" },
      { typeName: "Decks", skateItem: true },
    ];

    await Category.bulkCreate(categories);
    console.log("[Seeders] Las categories fueron creadas");
  } catch (error) {
    console.log("categories error");
  }
};

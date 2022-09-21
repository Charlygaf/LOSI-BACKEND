const { ClothingType } = require("../models");
module.exports = async () => {
  try {
    const clothingTypes = [
      { typeName: "Pantalones" },
      { typeName: "Remeras" },
      { typeName: "Camperas" },
      { typeName: "Buzos" },
      { typeName: "Accesorios" },
      { typeName: "Camisas" },
    ];

    await ClothingType.bulkCreate(clothingTypes);
    console.log("[Seeders] Las clothingTypes fueron creadas");
  } catch (error) {
    console.log("clothingTypes error");
  }
};

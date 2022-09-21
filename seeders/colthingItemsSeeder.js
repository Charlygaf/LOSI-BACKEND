const { ClothingItem } = require("../models");
module.exports = async () => {
  try {
    const clothingItems = [
      {
        title: "Gorro Lana Goorin On The Hunt Gris",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://f.fcdn.app/imgs/2876b2/laisla.com.uy/isl/7b65/webp/catalogo/107-0210-GRY107-0210-GRY1/2000-2000/gorro-lana-goorin-on-the-hunt-gorro-lana-goorin-on-the-hunt.jpg",
        price: 2190,
        stock: true,
        clothingTypeId: 5,
      },
    ];

    await ClothingItem.bulkCreate(clothingItems);
    console.log("[Seeders] Los clothingItems fueron creados");
  } catch (error) {
    console.log("clothing items error");
  }
};

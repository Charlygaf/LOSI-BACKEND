const { ClothingItem } = require("../models");
module.exports = async () => {
  try {
    const clothingItems = [
      {
        title: "Gorro charly",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/WARRENOLIVEPANTFRONT_1024x1024.jpg?v=1658433664",
        price: 2190,
        stock: true,
        clothingTypeId: 5,
      },
      {
        title: "Gorro thom",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/MIAMIBLACKTEE_1024x1024.jpg?v=1658434698",
        price: 2100,
        stock: true,
        clothingTypeId: 5,
      },
      {
        title: "Gorro flor",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/NAMASTEWHITETEE_1024x1024.jpg?v=1658434859",
        price: 2100,
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

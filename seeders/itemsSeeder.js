const { Item } = require("../models");
module.exports = async () => {
  try {
    const items = [
      {
        title: "Gorro charly",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/WARRENOLIVEPANTFRONT_1024x1024.jpg?v=1658433664",
        price: 2190,
        stock: true,
        clothingTypeId: 5,
        discount: 0.8,
      },
      {
        title: "Gorro thom",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/MIAMIBLACKTEE_1024x1024.jpg?v=1658434698",
        price: 2100,
        stock: true,
        clothingTypeId: 5,
        discount: 0.8,
      },
      {
        title: "Gorro flor",
        description: "Gorro de lana en color gris, con estampa bordada.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/NAMASTEWHITETEE_1024x1024.jpg?v=1658434859",
        price: 2100,
        stock: true,
        clothingTypeId: 5,
        discount: 0.8,
      },
      {
        title: "Tabla 8.0",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/DBThink_1024x1024.jpg?v=1658435171",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },
      {
        title: "Tabla  8.35''",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/DRBIgDick_1024x1024.jpg?v=1658435240",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },
      {
        title: "Tabla  8.25",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/GCBilly_1024x1024.jpg?v=1658435194",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },

      {
        title: "Tabla 8.0",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/DBThink_1024x1024.jpg?v=1658435171",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },
      {
        title: "Tabla  8.35''",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/DRBIgDick_1024x1024.jpg?v=1658435240",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },
      {
        title: "Tabla  8.25",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0705/2433/products/GCBilly_1024x1024.jpg?v=1658435194",
        price: 5490,
        stock: true,
        skatewareTypeId: 1,
      },
    ];

    await Item.bulkCreate(items);
    console.log("[Seeders] Los items fueron creados");
  } catch (error) {
    console.log("Items error");
  }
};

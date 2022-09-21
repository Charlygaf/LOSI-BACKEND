const { SkateItem } = require("../models");

module.exports = async () => {
  try {
    const skateItems = [
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

    await SkateItem.bulkCreate(skateItems);
    console.log("[Seeders] Los skateItems fueron creados");
  } catch (error) {
    console.log("skateItems error");
  }
};

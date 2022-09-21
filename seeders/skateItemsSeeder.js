const { SkateItem } = require("../models");

module.exports = async () => {
  try {
    const skateItems = [
      {
        title: "Tabla Girl Anderson 8.25''",
        description:
          "Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
        imageUrl:
          "https://f.fcdn.app/imgs/002ac8/laisla.com.uy/isl/8741/webp/catalogo/CB4122-ROJCB4122-ROJ1/2000-2000/decks-girl-anderson-red-8-25-decks-girl-anderson-red-8-25.jpg",
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

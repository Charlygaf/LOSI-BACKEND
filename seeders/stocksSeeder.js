const { Stock } = require("../models");
module.exports = async () => {
  try {
    const stocks = [
      {
        id: 1,
        size: "L",
        stock: 25,

        ItemId: 1,
      },
      {
        id: 2,
        size: "L",
        stock: 30,

        ItemId: 2,
      },
      {
        id: 3,
        size: "L",
        stock: 10,

        ItemId: 3,
      },
      {
        id: 4,
        size: "L",
        stock: 10,

        ItemId: 4,
      },
      {
        id: 5,
        size: "L",
        stock: 10,

        ItemId: 5,
      },
      {
        id: 6,
        size: "L",
        stock: 10,

        ItemId: 6,
      },
      {
        id: 7,
        size: "L",
        stock: 10,

        ItemId: 7,
      },
      {
        id: 8,
        size: "XL",
        stock: 10,

        ItemId: 1,
      },
      {
        id: 9,
        size: "XL",
        stock: 10,

        ItemId: 2,
      },
      {
        id: 10,
        size: "XL",
        stock: 10,

        ItemId: 3,
      },
      {
        id: 11,
        size: "XL",
        stock: 10,

        ItemId: 4,
      },
      {
        id: 12,
        size: "XL",
        stock: 10,

        ItemId: 5,
      },
    ];

    await Stock.bulkCreate(stocks);
    console.log("[Seeders] Los stocks fueron creados");
  } catch (error) {
    console.log("Stocks error");
  }
};

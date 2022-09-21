const { Art } = require("../models");

module.exports = async () => {
  try {
    const arts = [
      {
        title: "Flower V1",
        description: "Lorem ipsum ad valorum",
        imageUrl:
          "https://i.pinimg.com/originals/fc/fd/d7/fcfdd70fca7a0f634f44b344fd2a4773.jpg",
      },
      {
        title: "Flower 2",
        description: "Lorem ipsum ad valorum",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iUkAtMMGwdY0q_oyJLbVxPlaBDR9t1F2e1miaxnySis3nFtxIh_BFD40JxX09aqkQa8&usqp=CAU",
      },
    ];

    await Art.bulkCreate(arts);
    console.log("[Seeders] Los arts fueron creados");
  } catch (error) {
    console.log("los artes no fueron creados");
  }
};

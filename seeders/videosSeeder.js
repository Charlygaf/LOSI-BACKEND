const { Video } = require("../models");

module.exports = async () => {
  try {
    const videos = [
      {
        title: "Losi 1 Año",
        description: "Losi Video. 1 año",

        youtubeUrl: "https://www.youtube.com/watch?v=MYSP8-rhnSk",
      },
      {
        title: "LOSI x MAURO PAIRET",
        description: "Maurito Buceo Bowl",

        youtubeUrl: "https://www.youtube.com/watch?v=oF93NaqmtSc",
      },
    ];

    await Video.bulkCreate(videos);
    console.log("[Seeders] Los videos fueron creados");
  } catch (error) {}
};

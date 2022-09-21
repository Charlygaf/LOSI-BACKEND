const { Art } = require("../models");

module.exports = async () => {
  try {
    const arts = [
      {
        title: "Flower V1",
        description: "Lorem ipsum ad valorum",

        imageUrl:
          "https://instagram.fmvd1-1.fna.fbcdn.net/v/t51.2885-15/268245838_675287893633500_3881028465110892257_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fmvd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=UeeICTsO2xIAX8UrkcK&tn=wcfyVcsv0jFKOluF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjczMDgzNDYzNzgyMTQ2OTQ2Ng%3D%3D.2-ccb7-5&oh=00_AT8Gnr5eXB2iXSe2wHpunBpUP4pWi3qutXp54fLWQmF55A&oe=631D4E0A&_nc_sid=30a2ef",
      },
      {
        title: "Flower 2",
        description: "Lorem ipsum ad valorum",

        imageUrl:
          "https://instagram.fmvd1-1.fna.fbcdn.net/v/t51.2885-15/269021263_947157845928886_7072622541972574806_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fmvd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ByXkZ8nvMXEAX91e1BV&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjczMDgzMjI3NzE2NjUwMjI0MQ%3D%3D.2-ccb7-5&oh=00_AT9OTXUyQyINH5F8SAivCJd_BC6xPird3h8Q_8h1SBlxmQ&oe=631C36F9&_nc_sid=30a2ef",
      },
    ];

    await Art.bulkCreate(arts);
    console.log("[Seeders] Los arts fueron creados");
  } catch (error) {}
};

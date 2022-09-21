const { response } = require("express");
const express = require("express");
const publicRouter = express.Router();
const {
  showContent,
  showProducts,
  showArts,
} = require("../controllers/publicController");

// Rutas del Públicas:
// ...
publicRouter.get("/content", showContent);
publicRouter.get("/products", showProducts);
publicRouter.get("/arts", showArts);

module.exports = publicRouter;

const { response } = require("express");
const express = require("express");
const publicRouter = express.Router();
const {
  showContent,
  showProducts,
} = require("../controllers/publicController");

// Rutas del Públicas:
// ...
publicRouter.get("/content", showContent);
publicRouter.get("/products", showProducts);
module.exports = publicRouter;

const express = require("express");
const publicRouter = express.Router();
const {
  showContent,
  showProducts,
  showArts,
} = require("../controllers/publicController");

// Rutas del Públicas:

// Content
publicRouter.get("/content", showContent);

//Product
publicRouter.get("/products", showProducts);

//Arts
publicRouter.get("/arts", showArts);

//Auth

module.exports = publicRouter;

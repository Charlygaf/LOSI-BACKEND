const express = require("express");
const publicRouter = express.Router();
const {
  showContent,
  showProducts,
  showProductDetails,
  showArts,
} = require("../controllers/publicController");

// Rutas del Públicas:

// Content
publicRouter.get("/content", showContent);

//Product
publicRouter.get("/products", async (req, res, next) => {
  try {
    const data = await showProducts();

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});
publicRouter.get("/product-detail/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await showProductDetails(id);

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

//Arts
publicRouter.get("/arts", showArts);

//Auth

module.exports = publicRouter;

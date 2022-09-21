const express = require("express");
const { isAdmin } = require("../middlewares/isAdmin");

const adminRouter = express.Router();

// Rutas del Admin

// Listar todos los usuarios
adminRouter.get("/users");

module.exports = adminRouter;

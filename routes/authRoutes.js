const express = require("express");
const authRouter = express.Router();
const { authenticate, create } = require("../controllers/userController");

//Auth endpoints

authRouter.post("/login", authenticate);
authRouter.post("/register", create);

module.exports = authRouter;

require("dotenv").config();
var cors = require("cors");
const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(morgan("tiny"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

routes(app);

//dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`)
);

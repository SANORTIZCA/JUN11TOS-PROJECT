"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _pg = require("pg");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// //Tienes todas las funciones para interactuar con la DB. Un Pool de conexiones es conjunto de conexiones que los usuarios pueden empezar a utilizar al empezar a hacer peticiones al servidor

//Trae los valores de .ENV
_dotenv["default"].config();

//Configuración para la conexión
var pool = exports.pool = new _pg.Pool({
  name: process.env.DB_NAME,
  description: process.env.DB_DESCRIPTION,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

//Prueba de conexión
pool.connect(function (err) {
  if (err) {
    console.error("Conection Failed", err.stack);
  } else {
    console.log("DB Conected");
  }
});
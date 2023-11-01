// //Tienes todas las funciones para interactuar con la DB. Un Pool de conexiones es conjunto de conexiones que los usuarios pueden empezar a utilizar al empezar a hacer peticiones al servidor
import { Pool } from "pg";
import dotenv from "dotenv";

//Trae los valores de .ENV
dotenv.config();

//Configuración para la conexión
export const pool = new Pool({
  name: process.env.DB_NAME,
  description: process.env.DB_DESCRIPTION,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

//Prueba de conexión
pool.connect((err) => {
  if (err) {
    console.error("Conection Failed", err.stack);
  } else {
    console.log("DB Conected");
  }
});

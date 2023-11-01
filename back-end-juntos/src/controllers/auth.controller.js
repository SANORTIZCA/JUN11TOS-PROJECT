import { pool } from "../database.js";
import { createAuthQuery } from "./user.querys.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "./auth.querys.js";
import { jwtTokens } from "../utils/jwt-helpers.js";

//Login para Usuarios
export const authInUser = async (req, res) => {
  try {
    const { correo_electronico, contrasena } = req.body;
    const users = await pool.query(getUserByEmail, [correo_electronico]);
    //Por si no existe el correo en nuestra base de datos
    if (users.rows.length === 0) {
      return res.status(401).json({ error: "Email is incorrect" });
    }
    // //Revisión de la contrasena
    const contrasenaValida = await bcrypt.compare(
      contrasena,
      users.rows[0].contrasena
    );
    if (!contrasenaValida) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    //JWT
    let tokens = jwtTokens(users.rows[0]);
    res.cookie("Refresh Token", tokens.refreshToken, { httpOnly: true });
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//Login para Empleados
export const authInEmployer = async (req, res) => {
  res.json("AuthsingInEmpleado");
};

import { pool } from "../database.js";
import { createAuthQuery } from "./user.querys.js";
import bcrypt from "bcryptjs";

//Registro para empleados
export const singUpUser = async (req, res) => {
  const {
    id_abono,
    tipo_usuario,
    nombre,
    apellido,
    cedula,
    fecha_nacimiento,
    direccion,
    correo_electronico,
    telefono,
    contrasena,
    descuento,
    institucion_educativa,
  } = req.body;
  const hashedPassword = await bcrypt.hash(contrasena, 10);
  const response = await pool.query(createAuthQuery, [
    id_abono,
    tipo_usuario,
    nombre,
    apellido,
    cedula,
    fecha_nacimiento,
    direccion,
    correo_electronico,
    telefono,
    hashedPassword,
    descuento,
    institucion_educativa,
  ]);
  res.status(201).json({
    message: "User Created",
    body: {
      abono: {
        id_abono,
        tipo_usuario,
        nombre,
        apellido,
        cedula,
        fecha_nacimiento,
        direccion,
        correo_electronico,
        telefono,
        hashedPassword,
        descuento,
        institucion_educativa,
      },
    },
  });
};

//Login para Usuarios
export const signInUser = async (req, res) => {
  res.json("SingInUser");
};

//Login para Empleados
export const signInEmployer = async (req, res) => {
  res.json("singInEmpleado");
};

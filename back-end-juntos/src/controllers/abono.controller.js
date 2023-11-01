import { pool } from "../database.js";
import {
  createAbonoQuery,
  getAbonoQuery,
  getAbonoByIdQuery,
  updateAbonoByIdQuery,
  deleteAbonoByIdQuery,
} from "./abono.querys.js";

export const createAbono = async (req, res) => {
  const { temporada, fecha_vencimiento, asiento, precio, tipo_localidad } =
    req.body;
  const response = await pool.query(createAbonoQuery, [
    temporada,
    fecha_vencimiento,
    asiento,
    precio,
    tipo_localidad,
  ]);
  //Código de estado 201 especifica que un nuevo recurso se ha creado
  res.status(201).json({
    message: "Abono Added Succesfully",
    body: {
      abono: { temporada, fecha_vencimiento, asiento, precio, tipo_localidad },
    },
  });
};

export const getAbono = async (req, res) => {
  const response = await pool.query(getAbonoQuery);
  res.status(200).json(response.rows);
};

export const getAbonoById = async (req, res) => {
  const id = req.params.abonoId;
  const response = await pool.query(getAbonoByIdQuery, [id]);
  res.status(200).json(response.rows);
};

export const updateAbonoById = async (req, res) => {
  const id = req.params.abonoId;
  const { temporada, fecha_vencimiento, asiento, precio, tipo_localidad } =
    req.body;
  const response = await pool.query(updateAbonoByIdQuery, [
    id,
    temporada,
    fecha_vencimiento,
    asiento,
    precio,
    tipo_localidad,
  ]);
  res.status(200).json({
    message: "Abono Updated",
    body: {
      abono: {
        id,
        temporada,
        fecha_vencimiento,
        asiento,
        precio,
        tipo_localidad,
      },
    },
  });
};

export const deleteAbonoById = async (req, res) => {
  const id = req.params.abonoId;
  const response = await pool.query(deleteAbonoByIdQuery, [id]);
  res.status(200).json({
    message: "Abono Deleted",
    body: {
      abono: { id },
    },
  });
};

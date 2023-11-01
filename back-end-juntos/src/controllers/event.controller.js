import { pool } from "../database.js";
import {
  createEventQuery,
  getEventQuery,
  getEventByIdQuery,
  updateEventByIdQuery,
  deleteEventByIdQuery,
} from "./event.querys.js";

export const createEvent = async (req, res) => {
  const { nombre, fecha, hora, descripcion } = req.body;
  const response = await pool.query(createEventQuery, [
    nombre,
    fecha,
    hora,
    descripcion,
  ]);
  //Código de estado 201 especifica que un nuevo recurso se ha creado
  res.status(201).json({
    message: "Event Added Succesfully",
    body: {
      event: { nombre, fecha, hora, descripcion },
    },
  });
};

export const getEvent = async (req, res) => {
  const response = await pool.query(getEventQuery);
  res.status(200).json(response.rows);
};

export const getEventById = async (req, res) => {
  const id = req.params.eventId;
  const response = await pool.query(getEventByIdQuery, [id]);
  res.status(200).json(response.rows);
};

export const updateEventById = async (req, res) => {
  const id = req.params.eventId;
  const { nombre, fecha, hora, descripcion } = req.body;
  const response = await pool.query(updateEventByIdQuery, [
    id,
    nombre,
    fecha,
    hora,
    descripcion,
  ]);
  res.status(200).json({
    message: "Event Updated",
    body: {
      event: { id, nombre, fecha, hora, descripcion },
    },
  });
};

export const deleteEventById = async (req, res) => {
  const id = req.params.eventId;
  const response = await pool.query(deleteEventByIdQuery, [id]);
  res.status(200).json({
    message: "Event Deleted",
    body: {
      event: { id },
    },
  });
};

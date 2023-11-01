"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEventByIdQuery = exports.getEventQuery = exports.getEventByIdQuery = exports.deleteEventByIdQuery = exports.createEventQuery = void 0;
var createEventQuery = exports.createEventQuery = "INSERT INTO evento (nombre, fecha, hora, descripcion) VALUES ($1, $2, $3, $4)";
var getEventQuery = exports.getEventQuery = "SELECT * FROM evento e";
var getEventByIdQuery = exports.getEventByIdQuery = "SELECT * FROM evento e WHERE e.id_evento = $1";
var updateEventByIdQuery = exports.updateEventByIdQuery = "UPDATE evento SET nombre = $2, fecha = $3, hora = $4, descripcion = $5 WHERE id_evento = $1";
var deleteEventByIdQuery = exports.deleteEventByIdQuery = "DELETE FROM evento e WHERE e.id_evento = $1";
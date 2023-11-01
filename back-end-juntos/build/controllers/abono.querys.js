"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAbonoByIdQuery = exports.getAbonoQuery = exports.getAbonoByIdQuery = exports.deleteAbonoByIdQuery = exports.createAbonoQuery = void 0;
var createAbonoQuery = exports.createAbonoQuery = "INSERT INTO abono (temporada, fecha_vencimiento, asiento, precio, tipo_localidad) VALUES ($1, $2, $3, $4, $5)";
var getAbonoQuery = exports.getAbonoQuery = "SELECT * FROM abono ab";
var getAbonoByIdQuery = exports.getAbonoByIdQuery = "SELECT * FROM abono ab WHERE ab.id_abono = $1";
var updateAbonoByIdQuery = exports.updateAbonoByIdQuery = "UPDATE abono SET temporada = $2, fecha_vencimiento = $3, asiento = $4, precio = $5, tipo_localidad = $6 WHERE id_abono = $1";
var deleteAbonoByIdQuery = exports.deleteAbonoByIdQuery = "DELETE FROM abono ab WHERE ab.id_abono = $1";
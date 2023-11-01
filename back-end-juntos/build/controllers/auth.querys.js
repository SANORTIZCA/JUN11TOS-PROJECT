"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserByEmail = void 0;
var getUserByEmail = exports.getUserByEmail = "SELECT * FROM usuario us WHERE us.correo_electronico = $1";
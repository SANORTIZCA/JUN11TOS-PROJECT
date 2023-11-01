"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authPage = void 0;
var authPage = exports.authPage = function authPage(permission) {
  return function (req, res, next) {
    var userRole = req.body.tipo_usuario;
    if (permission.includes(userRole)) {
      next();
    } else {
      //No autorizado
      return res.status(401).json("No tiene permisos");
    }
  };
};
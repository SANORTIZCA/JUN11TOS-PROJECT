"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtTokens = jwtTokens;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Trae los valores de .ENV
_dotenv["default"].config();
function jwtTokens(_ref) {
  var id = _ref.id,
    nombre = _ref.nombre,
    correo_electronico = _ref.correo_electronico;
  var user = {
    id: id,
    nombre: nombre,
    correo_electronico: correo_electronico
  };
  var accessToken = _jsonwebtoken["default"].sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "59m"
  });
  var refreshToken = _jsonwebtoken["default"].sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "40d"
  });
  return {
    accessToken: accessToken,
    refreshToken: refreshToken
  };
}
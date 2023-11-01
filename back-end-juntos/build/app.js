"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _event = _interopRequireDefault(require("./routes/event.routes"));
var _abono = _interopRequireDefault(require("./routes/abono.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _authorization = require("./middlewares/authorization");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Sirve para configurar solo la app de express

var app = (0, _express["default"])();

//Middlewares
//Morgan = Miidleware de express, permite ver las peticiones al servidor
app.use((0, _morgan["default"])("dev"));
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json()); // Convertir datos a JSON
app.use(_express["default"].urlencoded({
  extended: false
})); // Datos desde formulario convierte a JSON

//Metodo SET sirve para colocar un nombre y valor a una variable, par guardarla y luego obtener el valor de la misma
app.set("pkg", _package["default"]);

//Rutas
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use("/event", _authorization.authenticatedToken, _event["default"]);
app.use("/abono", _authorization.authenticatedToken, _abono["default"]);
app.use("/user", _user["default"]);
app.use("/auth", _auth["default"]);
var _default = exports["default"] = app;
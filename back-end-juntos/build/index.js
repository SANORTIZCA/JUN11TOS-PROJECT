"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Sirve para iniciar la app

_app["default"].listen(3000);
console.log("Server Listen on Port", 3000);
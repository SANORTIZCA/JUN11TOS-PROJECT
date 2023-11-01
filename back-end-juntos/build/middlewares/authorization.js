"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticatedToken = authenticatedToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function authenticatedToken(req, res, next) {
  var authHeader = req.headers["authorization"];
  var token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).json({
      error: "Null Token"
    });
  }
  _jsonwebtoken["default"].verify(token, process.env.ACCESS_TOKEN_SECRET, function (error, user) {
    if (error) {
      return res.status(403).json({
        error: error.message
      });
    }
    req.user = user;
    next();
  });
}
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Trae los valores de .ENV
dotenv.config();

export function jwtTokens({ id, nombre, correo_electronico }) {
  const user = { id, nombre, correo_electronico };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "59m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "40d",
  });
  return { accessToken, refreshToken };
}

//Sirve para configurar solo la app de express
import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cookieParser from "cookie-parser";
import eventRoutes from "./routes/event.routes";
import abonoRoutes from "./routes/abono.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import { authenticatedToken } from "./middlewares/authorization";

const app = express();

//Middlewares
//Morgan = Miidleware de express, permite ver las peticiones al servidor
app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.json()); // Convertir datos a JSON
app.use(express.urlencoded({ extended: false })); // Datos desde formulario convierte a JSON

//Metodo SET sirve para colocar un nombre y valor a una variable, par guardarla y luego obtener el valor de la misma
app.set("pkg", pkg);

//Rutas
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/event", authenticatedToken, eventRoutes);
app.use("/abono", authenticatedToken, abonoRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

export default app;

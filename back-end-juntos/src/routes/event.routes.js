import { Router } from "express";
import * as eventController from "../controllers/event.controller";
import { authPage } from "../middlewares/role.js";

const router = Router();

//POST para guardar nueva información
router.post("/", authPage([1]), eventController.createEvent);

//GET para obtener
router.get("/", eventController.getEvent);

router.get("/:eventId", eventController.getEventById);

//PUT para actualizar
router.put("/:eventId", eventController.updateEventById);

//DELETE para borrar
router.delete("/:eventId", eventController.deleteEventById);

export default router;

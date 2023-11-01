import { Router } from "express";
import * as abonoController from "../controllers/abono.controller";
import { authenticatedToken } from "../middlewares/authorization";

const router = Router();

//POST para guardar nueva información
router.post("/", authenticatedToken, abonoController.createAbono);

//GET para obtener
router.get("/", authenticatedToken, abonoController.getAbono);

router.get("/:abonoId", authenticatedToken, abonoController.getAbonoById);

//PUT para actualizar
router.put("/:abonoId", authenticatedToken, abonoController.updateAbonoById);

//DELETE para borrar
router.delete("/:abonoId", authenticatedToken, abonoController.deleteAbonoById);

export default router;

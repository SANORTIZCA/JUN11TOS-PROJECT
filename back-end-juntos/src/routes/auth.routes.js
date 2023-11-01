import { Router } from "express";
import * as authControllers from "../controllers/auth.controller";

const router = Router();

router.post("/authIn/user", authControllers.authInUser);
router.post("/authIn/employer", authControllers.authInEmployer);

export default router;

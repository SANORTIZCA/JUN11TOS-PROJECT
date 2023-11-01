import { Router } from "express";
import * as userControllers from "../controllers/user.controller";

const router = Router();

router.post("/singUp/user", userControllers.singUpUser);
router.post("/singIn/user", userControllers.signInUser);
router.post("/singIn/employer", userControllers.signInEmployer);

export default router;

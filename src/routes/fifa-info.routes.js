import { Router } from "express";
import getInfo from "../controllers/fifa-info.controllers.js";

const router = Router();

router.get('/', getInfo);

export default router;
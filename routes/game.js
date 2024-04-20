import Express from "express";
import gameControllers from "../controllers/game";
const router = Express.Router();

router.post("/create", gameControllers.create);
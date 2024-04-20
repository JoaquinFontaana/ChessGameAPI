import  Express from "express";
import userControllers from "../controllers/user";
router = Express.Router();

router.post("/create", userControllers.create);

export default router;
import { userMethod } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.get("/users", userMethod.getAll);
router.get("/users/:uuid", userMethod.getOne);
router.post("/users", userMethod.create);
router.delete("/users/:uuid", userMethod.remove);
router.put("/users/:uuid", userMethod.updateOne);

export default router;

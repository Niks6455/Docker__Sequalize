import { Router } from "express";
import taskController from "../controllers/task.js";

const router = Router();

router.post("/createComment", taskController.createTask)
router.delete("/deleteComment/:id", taskController.deleteTask)
router.patch("/updateStatus/:id", taskController.changeStatus)
router.get("/getAll", taskController.getTasks)

export default router;

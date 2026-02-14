import { Router } from "express";
import { createAgent, getAgent } from "../controllers/agent.controller";

const router = Router();

router.post("/", createAgent);
router.get("/:id", getAgent);

export default router;

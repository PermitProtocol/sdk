import { Request, Response } from "express";
import { createIdentity } from "../services/identity.service";
import { saveAgent, findAgent } from "../models/agent.model";

export const createAgent = async (req: Request, res: Response) => {
  const { name } = req.body;

  const identity = createIdentity(name);
  const agent = saveAgent(identity);

  res.json(agent);
};

export const getAgent = async (req: Request, res: Response) => {
  const agent = findAgent(req.params.id);

  if (!agent) return res.status(404).json({ error: "Agent not found" });

  res.json(agent);
};

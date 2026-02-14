import express from "express";
import dotenv from "dotenv";
import agentRoutes from "./api/agent.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/agents", agentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Permit Protocol running on port ${PORT}`);
});

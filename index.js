import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import expenseRoutes from "./src/routes/expense.routes.js";
import healthRoutes from "./src/routes/health.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


// --> API's Initialization
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/health", healthRoutes);

connectDB();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

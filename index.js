import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import expenseRoutes from "./src/routes/expense.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


// --> API's Initialization
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

connectDB();

app.get("/health", (_, res) => {
  res.json({ status: "OK", message: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

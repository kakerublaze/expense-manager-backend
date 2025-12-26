import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(json());


// --> API's Initialization

import authRoutes from "./src/routes/auth.routes";
import expenseRoutes from "./src/routes/expense.routes";

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

connectDB();

app.get("/health", (_, res) => {
  res.json({ status: "OK", message: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

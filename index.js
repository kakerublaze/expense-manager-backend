require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());


// --> API's Initialization

const authRoutes = require("./src/routes/auth.routes");
const expenseRoutes = require("./src/routes/expense.routes");

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);


app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

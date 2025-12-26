import express from "express";
import { registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);


router.post("/login", (_, res) => {
  res.send("Login API");
});

export default router;

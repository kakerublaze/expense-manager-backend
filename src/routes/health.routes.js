import express from "express";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({
    status: "ok",
    message: "Server Running",
    user: req.user.email
  });
});

export default router;

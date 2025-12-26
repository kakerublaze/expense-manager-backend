import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  res.send("Add expense");
});

router.get("/", (req, res) => {
  res.send("Get expenses");
});

router.delete("/:id", (req, res) => {
  res.send("Delete expense");
});

export default router;

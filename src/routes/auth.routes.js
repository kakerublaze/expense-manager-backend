const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register API");
});

router.post("/login", (req, res) => {
  res.send("Login API");
});

module.exports = router;

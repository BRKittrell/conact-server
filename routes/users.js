const express = require("express");
const router = express.Router();

// Register a user route
router.post("/", (req, res) => {
  res.send("Register a user");
});

// Login a user
router.get("/", (req, res) => {
  res.send("Log a user in");
});

module.exports = router;

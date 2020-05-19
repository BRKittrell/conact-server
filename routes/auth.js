const express = require("express");
const router = express.Router();
// Sign in authenticated user
router.post("/", (req, res) => {
  res.send("Sign in an authenticaed user, I think");
});

module.exports = router;

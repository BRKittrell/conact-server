const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get a contact for a specific user");
});

module.exports = router;

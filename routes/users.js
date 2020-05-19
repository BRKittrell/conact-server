const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { check, validationResult } = require("express-validator");

// Register a user route
router.post(
  "/",
  [
    check("name").isLength({ min: 5 }),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.send("working just fine");
  }
);

// Login a user
// router.get("/", (req, res) => {
//   res.send("Log a user in");
// });

module.exports = router;

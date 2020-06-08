const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// Register a user route
router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;

      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists." });
      }

      user = new User({
        name: name,
        email: email,
        password: password,
      });

      const salt = await bcrypt.genSaltSync(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server error in the post of users" });
    }
  }
);

module.exports = router;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

async function register(req, res) {
  try {
    const { username, password } = req.body;

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        error: "Username already exists. Please choose a different one",
      });
    }

    // Check if the password meets certain requirements
    if (password.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters long",
      });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Wrong username " });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Wrong password" });
    }
    const accessToken = jwt.sign({ username: user.username }, "secret_key", {
      expiresIn: "15m",
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { register, login };

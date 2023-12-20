const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

async function register(req, res) {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
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

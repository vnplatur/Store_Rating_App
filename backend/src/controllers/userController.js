import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../models/userModel.js";

// REGISTER
export const registerUsers = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  password = String(password);
  findUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0)
      return res.status(400).json({ error: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(name, email, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(req.body);
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

// LOGIN
export const loginUsers = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  findUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(401).json({ error: "Invalid email or password" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ error: "Invalid email or password" });

    res.json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  });
};

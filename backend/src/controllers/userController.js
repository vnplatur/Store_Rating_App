import { getUsers } from "../models/userModel.js";

export const fetchUsers = (req, res) => {
  getUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(users);
  });
};

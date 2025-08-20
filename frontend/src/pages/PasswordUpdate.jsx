import { useState } from "react";
import axios from "axios";
import styles from "./PasswordUpdate.module.css";

export default function PasswordUpdate() {
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPass !== form.confirm) {
      setMessage("New password and confirm password do not match!");
      return;
    }
    try {
      await axios.post("/api/update-password", form);
      setMessage("Password updated successfully!");
    } catch {
      setMessage("Failed to update password.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Update Password</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="password"
          name="current"
          placeholder="Current Password"
          value={form.current}
          onChange={handleChange}
        />
        <input
          type="password"
          name="newPass"
          placeholder="New Password"
          value={form.newPass}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

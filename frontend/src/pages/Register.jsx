import { useState } from "react";
import api from "../services/api";
import styles from "./Register.module.css";
import { useLocation } from "wouter";

export default function Register() {

  const [location] = useLocation();
  const mode = location.includes("login") ? "login" : "register";

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "register") {
        await api.post("/register", form);
        setMessage("Registration successful!");
      } else {
        await api.post("/login", {
          email: form.email,
          password: form.password,
        });
        setMessage("Login successful!");
      }
    } catch {
      setMessage(mode === "register" ?"Failed to register.":"Failed to Login.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>{mode === "register" ? "Create Account" : "Login"}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {mode === "register" && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">{mode === "register" ? "Register" : "Login"}</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

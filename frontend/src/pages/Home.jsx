import { useEffect } from "react";
import { useLocation } from "wouter";
import styles from "./Home.module.css";

export default function Home() {
  const user = { role: "landing" }; // Example user (replace with real auth)
  const isLoading = false;
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && user) {
      switch (user.role) {
        case "admin":
          setLocation("/admin");
          break;
        case "user":
          setLocation("/stores");
          break;
        case "store_owner":
          setLocation("/dashboard");
          break;
        default:
          setLocation("/landing");
          break;
      }
    }
  }, [user, isLoading, setLocation]);

  if (isLoading) {
    return <div className={styles.center}>Loading...</div>;
  }

  return <div className={styles.center}>Redirecting...</div>;
}

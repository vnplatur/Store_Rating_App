import { useEffect, useState } from "react";
import styles from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: fetch stats
    setTimeout(() => {
      setStats({ totalUsers: 42, totalStores: 8, totalRatings: 120 });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.subtitle}>Manage users, stores, and view system statistics</p>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <h3>Total Users</h3>
          <p >{loading ? "Loading..." : stats?.totalUsers}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Stores</h3>
          <p>{loading ? "Loading..." : stats?.totalStores}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Ratings</h3>
          <p>{loading ? "Loading..." : stats?.totalRatings}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.card}>
          <h3>User Management</h3>
          <p>Manage user accounts and permissions</p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/admin/users")}
          >
            Manage Users
          </button>
        </div>

        <div className={styles.card}>
          <h3>Store Management</h3>
          <p>Add and manage store listings</p>
          <button className={styles.button} disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}

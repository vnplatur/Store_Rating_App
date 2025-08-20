import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./StoreOwnerDashboard.module.css";

export default function StoreOwnerDashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("/api/my-stores").then((res) => setStores(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Store Owner Dashboard</h1>
      <div className={styles.grid}>
        {stores.map((store) => (
          <div key={store.id} className={styles.card}>
            <h3>{store.name}</h3>
            <p>{store.location}</p>
            <p>⭐ {store.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

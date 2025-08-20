import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./StoreListings.module.css";

export default function StoreListings() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("/api/stores").then((res) => setStores(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Store Listings</h1>
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

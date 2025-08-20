import { Link } from "wouter";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.message}>Page Not Found</h2>
        <p>Sorry, the page you are looking for doesn’t exist.</p>
        <Link href="/">
          <button className={styles.button}>Go Home</button>
        </Link>
      </div>
    </div>
  );
}

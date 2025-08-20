import { Link } from "wouter";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
            <h1 className={styles.brand}>StoreRate</h1>
            <div className={styles.navButtons}>
              <Link href="/auth/login">
                <button className={styles.outlineButton}>Sign In</button>
              </Link>
              <Link href="/auth/register">
                <button className={styles.primaryButton}>Sign Up</button>
              </Link>
            </div>
          </nav>
  );
};

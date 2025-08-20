import { Link } from "wouter";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      {/* <nav className={styles.navbar}>
        <h1 className={styles.brand}>StoreRate</h1>
        <div className={styles.navButtons}>
          <button
            className={styles.outlineButton}
            onClick={() => (window.location.href = "/api/login")}
          >
            Sign In
          </button>
          <Link href="/register">
            <button className={styles.primaryButton}>Sign Up</button>
          </Link>
        </div>
      </nav> */}

      <header className={styles.hero}>
        <h1>Welcome to StoreRate</h1>
        <p>
          Discover and rate stores in your area. Join our community to share
          experiences and build trust.
        </p>
        <div className={styles.heroButtons}>
          <button
            className={styles.primaryButton}
            onClick={() => (window.location.href = "/api/login")}
          >
            Get Started
          </button>
          <Link href="/register">
            <button className={styles.outlineButton}>Join Now</button>
          </Link>
        </div>
      </header>

      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h2 className={styles.cardTitle}>Rate Stores</h2>
          <p className={styles.cardText}>
            Share your experiences and help others discover great stores with
            our easy-to-use rating system.
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className={styles.cardTitle}>Find Stores</h2>
          <p className={styles.cardText}>
            Discover new stores in your area and browse reviews from other
            customers.
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className={styles.cardTitle}>Manage Your Store</h2>
          <p className={styles.cardText}>
            Store owners can register their business and track customer feedback
            to improve their service.
          </p>
        </div>
      </div>
    </div>
  );
}

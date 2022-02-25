import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Welcome to Pizza Point</h2>
        <Link href="/base" passHref>
          <button>Create Your Pizza</button>
        </Link>
      </main>
    </div>
  );
}

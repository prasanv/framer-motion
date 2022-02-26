import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { buttonHover } from "../src/animations/hoverAnimation";

export default function Home() {
  return (
    <motion.div
      className={styles.container}
      initial={{ translateY: "-600px" }}
      animate={{ translateY: "10px" }}
      transition={{ duration: 0.75 }}
    >
      <main className={styles.main}>
        <motion.h2
          animate={{
            fontSize: "45px",
            rotateX: 360,
          }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Welcome to Pizza Point
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/base" passHref>
            <motion.button whileHover={buttonHover}>
              Create Your Pizza
            </motion.button>
          </Link>
        </motion.div>
      </main>
    </motion.div>
  );
}

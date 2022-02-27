import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { buttonHover } from "../src/animations/hoverAnimation";

export default function Home() {
  const [compStatus, setCompStatus] = useState(true);
  const router = useRouter();

  return (
    <>
      <motion.div
        className={styles.marquee}
        animate={{ translateX: ["100vw", "-100vw"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        Claim your free Pizza on signup!!!! Claim your free Pizza on signup!!!!
        Claim your free Pizza on signup!!!! Claim your free Pizza on signup!!!!
      </motion.div>
      <AnimatePresence>
        {compStatus && (
          <motion.div
            className={styles.container}
            initial={{ translateY: "-600px" }}
            animate={{ translateY: "10px" }}
            transition={{ ease: "easeInOut" }}
            exit={{ translateY: "-100vw", transition: { ease: "easeInOut" } }}
          >
            <main className={styles.main}>
              <motion.h2
                animate={{
                  fontSize: "45px",
                  rotateY: 360,
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
                <motion.button
                  whileHover={buttonHover}
                  onClick={() => {
                    setCompStatus(false);
                    setTimeout(() => {
                      router.push("/base");
                    }, 250);
                  }}
                >
                  Create Your Pizza
                </motion.button>
              </motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

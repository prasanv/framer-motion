import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Header({ children }) {
  return (
    <div>
      <Head>
        <title>Pizza Point</title>
        <meta name="description" content="Pizza Point" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.logo}>
          <svg
            className={styles.pizza}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </div>
        <div className={styles.title}>
          <Link href="/" passHref>
            <motion.h1
              className={styles.titleHeading}
              initial={{ y: "-200px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: "200" }}
            >
              Pizza Point
            </motion.h1>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}

export default Header;

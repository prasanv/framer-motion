import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { pizzaDetails } from "../utils/userPizzaDetails";

const svgVariants = {
  hidden: { rotate: -360 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const svgPathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

function Header({ children }) {
  const [pizza, setPizza] = useContext(pizzaDetails);

  return (
    <div>
      <Head>
        <title>Pizza Point</title>
        <meta name="description" content="Pizza Point" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.logo}>
          <motion.svg
            className={styles.pizza}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <motion.path
              fill="none"
              variants={svgPathVariants}
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              fill="none"
              variants={svgPathVariants}
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </div>
        <div className={styles.title}>
          <Link href="/" passHref>
            <motion.h1
              className={styles.titleHeading}
              initial={{ y: "-200px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: "200" }}
              onClick={() => setPizza({ base: "", toppings: [] })}
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

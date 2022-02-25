import React from "react";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../src/utils/userPizzaDetails";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  buttonHover,
  listItemHover,
  listItemTransition,
} from "../src/animations/hoverAnimation";

function BasePage() {
  const [pizza, setPizza] = useContext(pizzaDetails);
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ translateX: "100vw" }}
      animate={{ translateX: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: "150" }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={listItemHover}
              transition={listItemTransition}
            >
              {pizza.base === base ? (
                <span className={styles.active}>{base}</span>
              ) : (
                <span>{base}</span>
              )}
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div
          initial={{ translateX: "-100vw" }}
          animate={{ translateX: 0 }}
          transition={{ type: "tween" }}
        >
          <Link href="/toppings" passHref>
            <motion.button whileHover={buttonHover}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

export default BasePage;

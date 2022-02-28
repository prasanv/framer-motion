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

// Variants allows the prop structure to propagate through the children
// In this case containerVariants is parent and its props structure will propagate through its children nextButtonVariants
const containerVariants = {
  hidden: {
    translateX: "100vw",
  },
  visible: {
    translateX: 0,
    transition: { delay: 0.3, type: "spring", stiffness: "150" },
  },
};

const nextButtonVariants = {
  hidden: {
    translateX: "-100vw",
  },
  visible: {
    translateX: 0,
    transition: { type: "tween" },
  },
};

function BasePage() {
  const [pizza, setPizza] = useContext(pizzaDetails);
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  return (
    <div className={styles.base}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden" // prop will propagate through children
        animate="visible" // prop will propagate through children
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
            variants={nextButtonVariants} // Note: There is no props. Props structure propagate from parent.
          >
            <Link href="/toppings" passHref>
              <motion.button whileHover={buttonHover}>Next</motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default BasePage;

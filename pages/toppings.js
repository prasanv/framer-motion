import React from "react";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../src/utils/userPizzaDetails";
import Link from "next/link";
import {
  buttonHover,
  listItemHover,
  listItemTransition,
} from "../src/animations/hoverAnimation";
import { motion } from "framer-motion";

// Variants allows the prop structure to propagate through the children
// In this case containerVariants is parent and its props structure will propagate through its children nextButtonVariants
const containerVariants = {
  hidden: {
    translateX: "100vw",
  },
  visible: {
    translateX: 0,
    transition: { delay: 0.5, type: "spring", stiffness: "150" },
  },
};

function ToppingsPage() {
  const [pizza, setPizza] = useContext(pizzaDetails);
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className={styles.toppings}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            return (
              <motion.li
                key={topping}
                onClick={() => addTopping(topping)}
                whileHover={listItemHover}
                transition={listItemTransition}
              >
                {pizza.toppings.includes(topping) ? (
                  <span className={styles.active}>{topping}</span>
                ) : (
                  <span>{topping}</span>
                )}
              </motion.li>
            );
          })}
        </ul>
        {!!pizza.toppings.length && (
          <div>
            <Link href="/order" passHref>
              <motion.button whileHover={buttonHover}>Order</motion.button>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ToppingsPage;

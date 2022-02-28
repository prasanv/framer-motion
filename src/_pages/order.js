import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../../src/utils/userPizzaDetails";
import { motion, AnimatePresence } from "framer-motion";

// Variants allows the prop structure to propagate through the children
// In this case containerVariants is parent and its props structure will propagate through its children nextButtonVariants
const containerVariants = {
  hidden: {
    translateX: "100vw",
  },
  visible: {
    translateX: 0,
    transition: {
      type: "spring",
      mass: 0.5, // higher mass moves slower, lower mass moves quicker
      damping: 9, // strength of oscillation, higher number less oscillation, lover number more oscillation, 0 indefinite oscillation
      when: "beforeChildren", // beforeChildren|afterChildren
      staggerChildren: 0.3, // allows child animation to happen one after another (time in seconds)
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Order() {
  const [pizza, setPizza] = useContext(pizzaDetails);
  const [showOrderDetails, setShowOrderDetails] = useState(true);
  setTimeout(() => {
    setShowOrderDetails(false);
  }, 4000);

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className={styles.orderHeading} variants={childVariants}>
            Thank you for your order :)
          </motion.h2>
          <AnimatePresence>
            {showOrderDetails && (
              <motion.div
                exit={{ translateY: -1000 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p variants={childVariants}>
                  You ordered a {pizza.base} pizza with:
                </motion.p>
                {pizza.toppings.map((topping) => (
                  <motion.div key={topping} variants={childVariants}>
                    {topping}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Order;

import React from "react";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../src/utils/userPizzaDetails";
import Link from "next/link";
import { buttonHover } from "../src/animations/hoverAnimation";
import { motion } from "framer-motion";

function OrderPage() {
  const [pizza, setPizza] = useContext(pizzaDetails);

  return (
    <div className={styles.container}>
      <h2 className={styles.orderHeading}>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      <Link href="/" passHref>
        <motion.button
          onClick={() => setPizza({ base: "", toppings: [] })}
          whileHover={buttonHover}
        >
          Home
        </motion.button>
      </Link>
    </div>
  );
}

export default OrderPage;

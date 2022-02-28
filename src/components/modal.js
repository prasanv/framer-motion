import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { buttonHover } from "../animations/hoverAnimation";
import Link from "next/link";
import { pizzaDetails } from "../utils/userPizzaDetails";
import { useContext } from "react";

function Modal({ setShowModal }) {
  const [pizza, setPizza] = useContext(pizzaDetails);

  return (
    <motion.div
      setShowModal={setShowModal}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      <div className={styles.backdrop}>
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{
            translateY: "25vh",
            opacity: 1,
            transition: {
              translateY: { ease: "easeInOut", duration: 0.5 },
            },
          }}
        >
          <p>Want to order another Pizza!</p>
          <Link href="/" passHref>
            <motion.button
              whileHover={buttonHover}
              onClick={() => setPizza({ base: "", toppings: [] })}
            >
              Start Again
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Modal;

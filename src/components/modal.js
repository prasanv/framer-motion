import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonHover } from "../animations/hoverAnimation";

function Modal() {
  return (
    <div className={styles.backdrop}>
      <motion.div
        className={styles.modal}
        animate={{ translateY: "25vh" }}
        transition={{ ease: "easeInOut" }}
      >
        <p>Want to order another Pizza!</p>
        <Link href="/" passHref>
          <motion.button whileHover={buttonHover}>Start Again</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Modal;

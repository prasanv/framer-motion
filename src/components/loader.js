import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

const loaderVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: [-20, 20],
    y: [0, -30],
    transition: {
      delay: 3,
      x: { yoyo: Infinity, duration: 0.5, ease: "easeInOut" },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeInOut" },
    },
  },
};

function Loader() {
  return (
    <>
      <motion.div
        className={styles.loader}
        variants={loaderVariant}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </>
  );
}

export default Loader;

import React from "react";
import styles from "../../styles/Home.module.css";
import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  hidden: { opacity: 0 },
  animationOne: {
    opacity: 1,
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5, ease: "easeInOut" },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeInOut" },
    },
  },
  animationTwo: {
    opacity: 1,
    x: 0,
    y: [0, -40],
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: "easeInOut" },
    },
  },
  animationThree: {
    opacity: 1,
    y: 0,
    x: [0, -40],
    transition: {
      x: { yoyo: Infinity, duration: 0.25, ease: "easeInOut" },
    },
  },
};

function Loader() {
  const [bouncingLoader, cycleBouncingLoader] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );

  return (
    <>
      <motion.div
        className={styles.loader}
        variants={loaderVariant}
        initial="hidden"
        animate={bouncingLoader}
      ></motion.div>
      <div
        onClick={() => {
          cycleBouncingLoader();
        }}
      >
        <button>Toggle Animation</button>
      </div>
    </>
  );
}

export default Loader;

import React from "react";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../src/utils/userPizzaDetails";
import Link from "next/link";

function BasePage() {
  const [pizza, setPizza] = useContext(pizzaDetails);
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  return (
    <div className={styles.container}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          return (
            <li key={base} onClick={() => addBase(base)}>
              {pizza.base === base ? (
                <span className={styles.active}>{base}</span>
              ) : (
                <span>{base}</span>
              )}
            </li>
          );
        })}
      </ul>
      {pizza.base && (
        <div>
          <Link href="/toppings" passHref>
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BasePage;

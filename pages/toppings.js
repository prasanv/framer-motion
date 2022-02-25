import React from "react";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { pizzaDetails } from "../src/utils/userPizzaDetails";
import Link from "next/link";

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
    <div className={styles.container}>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              {pizza.toppings.includes(topping) ? (
                <span className={styles.active}>{topping}</span>
              ) : (
                <span>{topping}</span>
              )}
            </li>
          );
        })}
      </ul>

      <Link href="/order" passHref>
        <button>Order</button>
      </Link>
    </div>
  );
}

export default ToppingsPage;

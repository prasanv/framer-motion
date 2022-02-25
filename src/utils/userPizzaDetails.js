import React, { createContext, useState } from "react";

export const pizzaDetails = React.createContext();

function UserPizzaDetails({ children }) {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  return (
    <>
      <pizzaDetails.Provider value={[pizza, setPizza]}>
        {children}
      </pizzaDetails.Provider>
    </>
  );
}

export default UserPizzaDetails;

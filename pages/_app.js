import "../styles/globals.css";
import Header from "../src/components/header";
import UserPizzaDetails from "../src/utils/userPizzaDetails";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <UserPizzaDetails>
      <Header>
        <AnimatePresence>
          <div>
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </Header>
    </UserPizzaDetails>
  );
}

export default MyApp;

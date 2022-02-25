import "../styles/globals.css";
import Header from "../src/components/header";
import UserPizzaDetails from "../src/utils/userPizzaDetails";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <UserPizzaDetails>
        <Component {...pageProps} />
      </UserPizzaDetails>
    </Header>
  );
}

export default MyApp;

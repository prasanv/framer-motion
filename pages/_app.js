import "../styles/globals.css";
import Header from "../src/components/header";
import UserPizzaDetails from "../src/utils/userPizzaDetails";

function MyApp({ Component, pageProps }) {
  return (
    <UserPizzaDetails>
      <Header>
        <Component {...pageProps} />
      </Header>
    </UserPizzaDetails>
  );
}

export default MyApp;

import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/main.scss";
import { store } from "../app/store";
// import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </Provider>
  );
}

export default MyApp;

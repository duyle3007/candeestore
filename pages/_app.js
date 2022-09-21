import { Provider } from "react-redux";
import store from "redux/store";
import Header from "components/Header/header";

import "styles/globals.scss";

function Layout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default Layout
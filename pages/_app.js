import "styles/globals.scss";
import { Provider } from "react-redux";
import store from "redux/store";

function Layout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default Layout
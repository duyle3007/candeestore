import { Provider } from "react-redux";
import Head from "next/head";
import { persistor, store } from "redux/store";
import Header from "components/Header/header";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";

import "styles/globals.scss";

function Layout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Candee store</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default Layout;

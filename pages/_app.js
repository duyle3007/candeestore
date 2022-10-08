import { Provider } from "react-redux";
import Head from "next/head";
import { persistor, store } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";

import Layout from "components/Layout/layout";

import "styles/globals.scss";

function Main({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Candee store</title>
        </Head>
        <Layout Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default Main;

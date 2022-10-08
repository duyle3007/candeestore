import Header from "components/Header/header";
import CartBubble from "components/CartBubble/cartBubble";
import { useEffect, useRef, useState } from "react";

const Layout = ({ Component, pageProps }) => {
  const headerRef = useRef();
  const [bodyHeight, setBodyHeight] = useState();

  useEffect(() => {
    const headerHeight = headerRef.current?.clientHeight;
    const windowHeight = window.innerHeight;
    setBodyHeight(windowHeight - headerHeight);
  });

  return (
    <div className="h-full">
      <Header ref={headerRef} />
      <div className={`flex flex-col`} style={{ height: bodyHeight }}>
        <Component {...pageProps} />
      </div>
      <CartBubble />
    </div>
  );
};

export default Layout;

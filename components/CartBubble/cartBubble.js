import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./cartBubble.module.scss";
import { useRouter } from "next/router";
import { MOBILE_BREAKPOINT } from "components/Header/whiteHeader/whiteHeader";

const CartBubble = () => {
  const router = useRouter();
  const productList = useSelector((state) => state.product.productList);
  if (
    productList.length === 0 ||
    router.pathname === "/cart" ||
    window.innerWidth > MOBILE_BREAKPOINT
  ) {
    return null;
  }

  return (
    <div className={styles["cart-bubble"]} onClick={() => router.push("/cart")}>
      <ShoppingCartOutlined />
      {productList.length} sản phẩm
    </div>
  );
};

export default CartBubble;

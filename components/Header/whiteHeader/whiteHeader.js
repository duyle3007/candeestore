import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { logInWithEmailAndPassword } from "utils/firebase";

import styles from "./whiteHeader.module.scss";

const WhiteHeader = () => {
  const router = useRouter();
  const productList = useSelector((state) => state.product.productList);

  const goToCart = () => {
    router.push("/cart");
  };

  const goToLogin = () => {
    logInWithEmailAndPassword("duyle@gmail.com", "12334");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className={styles["white-header"]}>
      <div className={styles["left"]}>
        <div className={styles["store-name"]}>
          <Link href="/">Candee Store</Link>
        </div>
        <div className={styles["search-bar"]}>
          <input />
          <SearchOutlined />
        </div>
      </div>

      <div className={styles["right"]}>
        <div className={styles["login-signup"]}>
          <span onClick={goToLogin}>Login</span>/
          <span onClick={goToSignup}>Signup</span>
        </div>
        <div className={styles["cart"]} onClick={goToCart}>
          <ShoppingCartOutlined />
          Giỏ hàng ({productList.length})
        </div>
      </div>
    </div>
  );
};

export default WhiteHeader;

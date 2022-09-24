import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import styles from "./whiteHeader.module.scss";

const WhiteHeader = () => {
  const productList = useSelector((state) => state.product.productList);

  return (
    <div className={styles["white-header"]}>
      <div className={styles["left"]}>
        <div className={styles["store-name"]}>Candee Store</div>
        <div className={styles["search-bar"]}>
          <input />
          <SearchOutlined />
        </div>
      </div>

      <div className={styles["right"]}>
        <div className={styles["login-signup"]}>Login/Signup</div>
        <div className={styles["cart"]}>
          <ShoppingCartOutlined />
          Giỏ hàng ({productList.length})
        </div>
      </div>
    </div>
  );
};

export default WhiteHeader;

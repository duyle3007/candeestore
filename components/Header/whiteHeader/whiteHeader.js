import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { notification } from "antd";
import Dropdown from "components/Dropdown/dropdown";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/reducers/userReducer";
import { auth } from "utils/firebase";

import styles from "./whiteHeader.module.scss";

const LogoutButton = ({ onLogout }) => {
  return (
    <div className={styles["logout-btn"]} onClick={onLogout}>
      Logout
    </div>
  );
};

const WhiteHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const userData = useSelector((state) => state.user.userData);

  const goToCart = () => {
    router.push("/cart");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      notification.success({ message: "Logout successfully" });
    } catch (err) {
      notification.error({ message: err.message || "Something went wrong" });
      console.log("error", err);
    }
  };

  return (
    <div className={styles["white-header"]}>
      <div className={styles["left"]}>
        <div className={styles["store-name"]}>
          <Link href="/">Candee Store</Link>
        </div>
        {/* <div className={styles["search-bar"]}>
          <input />
          <SearchOutlined />
        </div> */}
      </div>

      <div className={styles["right"]}>
        {userData ? (
          <div className={styles["login-signup"]}>
            <Dropdown
              title={`Xin chào, ${userData.email}`}
              menu={[<LogoutButton onLogout={onLogout} />]}
            />
          </div>
        ) : (
          <div className={styles["login-signup"]}>
            <span onClick={goToLogin}>Login</span>/
            <span onClick={goToSignup}>Signup</span>
          </div>
        )}
        <div className={styles["cart"]} onClick={goToCart}>
          <ShoppingCartOutlined />
          Giỏ hàng ({productList.length})
        </div>
      </div>
    </div>
  );
};

export default WhiteHeader;

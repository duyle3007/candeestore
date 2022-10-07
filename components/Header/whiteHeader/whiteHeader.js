import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Dropdown from "components/Dropdown/dropdown";
import { logout } from "redux/reducers/userReducer";
import { updateProductList } from "redux/reducers/productReducer";
import { auth } from "utils/firebase";

import styles from "./whiteHeader.module.scss";

const LogoutButton = ({ onLogout }) => {
  return (
    <div className={styles["logout-btn"]} onClick={onLogout}>
      Logout
    </div>
  );
};

export const MOBILE_BREAKPOINT = 767;

const WhiteHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const userData = useSelector((state) => state.user.userData);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setIsMobile(true);
    }
  }, []);

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
      dispatch(updateProductList([]));
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
        {isMobile ? null : (
          <div className={styles["cart"]} onClick={goToCart}>
            <ShoppingCartOutlined />
            Giỏ hàng ({productList.length})
          </div>
        )}
      </div>
    </div>
  );
};

export default WhiteHeader;

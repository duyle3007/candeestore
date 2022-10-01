import { ShoppingCartOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { addProduct } from "redux/reducers/productReducer";
import { generateSlug } from "utils";

import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addProduct(product));
    notification.success({ message: "Đã thêm sản phẩm" });
  };

  const goToDetail = (product) => {
    router.push(`/product/${generateSlug(product.name)}`);
  };

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image"]}>
        <img src={product.url} />
        <div className={styles["image-info"]}>
          <div
            className={styles["cart-icon"]}
            onClick={() => addProductToCart(product)}
          >
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
      <div
        className={styles["product-info"]}
        onClick={() => goToDetail(product)}
      >
        <div className={styles["product-title"]}>{product.name}</div>
        <div className={styles["product-date"]}>{product.hsd}</div>
        <div className={styles["product-price"]}>
          <div className={styles["price"]}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </div>
          <div className={styles["old-price"]}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.oldPrice)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

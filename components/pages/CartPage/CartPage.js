import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { removeProduct } from "redux/reducers/productReducer";

import styles from "./CartPage.module.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const [finishPay, setFinishPay] = useState(false);

  const onDeleteItem = (item) => {
    const removeSelectedItem = productList.filter(
      (product) => product.name !== item.name
    );
    dispatch(removeProduct(removeSelectedItem));
  };

  const onPayment = () => {
    setFinishPay(true);
  };
  if (finishPay) {
    return (
      <div className={styles["payment-success"]}>
        <CheckCircleOutlined />
        Thanh toán hoàn tất
      </div>
    );
  }
  return (
    <div className={styles["cart-page"]}>
      Danh sách sản phẩm
      <div className={styles["cart-list"]}>
        {productList.length > 0 ? (
          productList.map((product) => (
            <div className={styles["cart-item"]}>
              <img src={product.url} />
              <div className={styles["item-info"]}>
                <div className={styles["item-name"]}>{product.name}</div>
                <div className={styles["item-price"]}>{product.price}</div>
              </div>
              <DeleteOutlined
                className={styles["delete-icon"]}
                onClick={() => onDeleteItem(product)}
              />
            </div>
          ))
        ) : (
          <div>Bạn chưa chọn sản phẩm nào</div>
        )}

        {productList.length > 0 && (
          <button className={styles["payment-btn"]} onClick={onPayment}>
            Thanh toán
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;

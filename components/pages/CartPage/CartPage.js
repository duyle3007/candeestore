import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InputNumber } from "antd";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { updateProductList } from "redux/reducers/productReducer";
import { useRouter } from "next/router";

import styles from "./CartPage.module.scss";

const InputNum = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <InputNumber
      className={styles["input-number"]}
      addonBefore={
        <div className={styles["input-icon"]} onClick={onDecrease}>
          -
        </div>
      }
      addonAfter={
        <div className={styles["input-icon"]} onClick={onIncrease}>
          +
        </div>
      }
      controls={false}
      min={1}
      value={quantity}
    />
  );
};

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.user.token);
  const productList = useSelector((state) => state.product.productList);
  const [finishPay, setFinishPay] = useState(false);

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token]);

  const onDeleteItem = (item) => {
    const removeSelectedItem = productList.filter(
      (product) => product.name !== item.name
    );
    dispatch(updateProductList(removeSelectedItem));
  };

  const onPayment = () => {
    setFinishPay(true);
    dispatch(updateProductList([]));
  };
  if (finishPay) {
    return (
      <div className={styles["payment-success"]}>
        <CheckCircleOutlined />
        Thanh toán hoàn tất
      </div>
    );
  }

  const onDecrease = (product) => {
    if (product.quantity === 1) {
      onDeleteItem(product);
    } else {
      const newProductList = productList.map((perfume) => {
        if (perfume.name === product.name) {
          return { ...perfume, quantity: perfume.quantity - 1 };
        }
        return perfume;
      });
      dispatch(updateProductList(newProductList));
    }
  };

  const onIncrease = (product) => {
    const newProductList = productList.map((perfume) => {
      if (perfume.name === product.name) {
        return { ...perfume, quantity: perfume.quantity + 1 };
      }
      return perfume;
    });
    dispatch(updateProductList(newProductList));
  };
  return (
    <div className={styles["cart-page"]}>
      Danh sách sản phẩm
      <div className={styles["cart-list"]}>
        {productList.length > 0 ? (
          productList.map((product) => (
            <div className={styles["cart-item"]} key={product.name}>
              <img src={product.url} />
              <div className={styles["item-info"]}>
                <div className={styles["item-name"]}>{product.name}</div>
                <div className={styles["item-price"]}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </div>
                <InputNum
                  quantity={product.quantity}
                  onDecrease={() => onDecrease(product)}
                  onIncrease={() => onIncrease(product)}
                />
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

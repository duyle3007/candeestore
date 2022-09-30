import { InputNumber, notification } from "antd";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";

import { updateProductList } from "redux/reducers/productReducer";
import { generateSlug } from "utils";
import { LIST_PRODUCT } from "components/ProductList/productList";

import styles from "./productDetailPage.module.scss";

const ProductDetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const [productDetail, setProductDetail] = useState();
  const [quantity, setQuantity] = useState(1);

  const newPrice = useMemo(
    () =>
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(productDetail?.price),
    [productDetail]
  );

  const oldPrice = useMemo(
    () =>
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(productDetail?.oldPrice),
    [productDetail]
  );

  const savePrice = useMemo(() => {
    const discountPrice =
      Number(productDetail?.oldPrice) - Number(productDetail?.price);

    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(discountPrice);
  }, [productDetail]);

  const discountPercents = useMemo(() => {
    const discountPrice =
      Number(productDetail?.oldPrice) - Number(productDetail?.price);
    const discountPercentDecimal = discountPrice / productDetail?.oldPrice;
    return Math.round(discountPercentDecimal * 100);
  }, [productDetail]);

  useEffect(() => {
    if (router.isReady) {
      const productName = router.query.name;
      const findProduct = LIST_PRODUCT.find(
        (product) => generateSlug(product.name) === productName
      );
      if (!findProduct) {
        router.push("/");
      } else {
        setProductDetail(findProduct);
      }
    }
  }, [router.isReady]);

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onIncrease = () => {
    setQuantity(quantity + 1);
  };

  const onAddCart = () => {
    const productIndex = productList.findIndex(
      (product) => product.name === productDetail.name
    );
    if (productIndex >= 0) {
      const cloneListProduct = cloneDeep(productList);
      cloneListProduct[productIndex].quantity =
        cloneListProduct[productIndex].quantity + quantity;
      dispatch(updateProductList(cloneListProduct));
    } else {
      dispatch(
        updateProductList([...productList, { ...productDetail, quantity }])
      );
    }

    notification.success({ message: "Thêm vào giỏ thành công" });
  };

  if (!productDetail) {
    return null;
  }

  return (
    <div className={styles["product-detail"]}>
      <div className={styles["image-container"]}>
        <img src={productDetail.url} />
      </div>

      <div className={styles["product-info"]}>
        <div className={styles["product-name"]}>{productDetail.name}</div>
        <div>
          Hạn sử dụng:
          <span className={styles["product-hsd"]}>{productDetail.hsd}</span>
        </div>
        <div className={styles["product-price"]}>
          <div className={styles["new-old-price"]}>
            <div className={styles["new-price"]}>{newPrice}</div>
            <div className={styles["old-price"]}>{oldPrice}</div>
            <div className={styles["discount"]}>-{discountPercents}%</div>
          </div>
          <div className={styles["save-price"]}>(Tiết kiệm: {savePrice})</div>
        </div>

        <div className={styles["quantity"]}>
          Số lượng:
          <InputNumber
            addonBefore={
              <div
                className={styles["input-icon"]}
                onClick={() => onDecrease()}
              >
                -
              </div>
            }
            addonAfter={
              <div
                className={styles["input-icon"]}
                onClick={() => onIncrease()}
              >
                +
              </div>
            }
            controls={false}
            min={1}
            value={quantity}
          />
        </div>

        <button className={styles["add-cart-btn"]} onClick={onAddCart}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

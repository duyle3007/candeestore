import { ShoppingCartOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";

import { HomepageContext } from "components/pages/Homepage/homepage";
import { addProduct } from "redux/reducers/productReducer";
import { generateSlug } from "utils";

import styles from "./productList.module.scss";

export const LIST_PRODUCT = [
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 100ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 200ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 300ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 400ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 500ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 600ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 700ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 800ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 900ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 1000ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 1100ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { initData, setInitData } = useContext(HomepageContext);

  const addProductToCart = (product) => {
    dispatch(addProduct(product));
    notification.success({ message: "Đã thêm sản phẩm" });
  };

  const goToDetail = (product) => {
    router.push(`/product/${generateSlug(product.name)}`);
  };
  return (
    <div className={styles["product-list"]}>
      {LIST_PRODUCT.map((product, index) => (
        <div className={styles["product"]} key={index}>
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
      ))}
    </div>
  );
};

export default ProductList;

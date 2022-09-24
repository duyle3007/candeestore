import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/reducers/productReducer";

import styles from "./productList.module.scss";

const LIST_PRODUCT = [
  {
    url: "https://m.media-amazon.com/images/I/51CvlRGHZqL._SL1500_.jpg",
    name: "Nước hoa Calvin Klein One EDT 200ml",
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
    name: "Nước hoa Calvin Klein One EDT 200ml",
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
    name: "Nước hoa Calvin Klein One EDT 200ml",
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
    name: "Nước hoa Calvin Klein One EDT 200ml",
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
    name: "Nước hoa Calvin Klein One EDT 200ml",
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
    name: "Nước hoa Calvin Klein One EDT 200ml",
    hsd: "HSD trên 16 tháng",
    price: "1150000",
    oldPrice: "2430000",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles["product-list"]}>
      {LIST_PRODUCT.map((product, index) => (
        <div className={styles["product"]} key={index}>
          <div className={styles["product-image"]}>
            <img src={product.url} />
            <div className={styles["image-info"]}>
              <ShoppingCartOutlined
                onClick={() => dispatch(addProduct(product))}
              />
            </div>
          </div>
          <div className={styles["product-info"]}>
            <div className={styles["product-title"]}>{product.name}</div>
            <div className={styles["product-date"]}>{product.hsd}</div>
            <div className={styles["product-price"]}>
              <div className={styles["price"]}>{product.price}₫</div>
              <div className={styles["old-price"]}>{product.oldPrice}₫</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

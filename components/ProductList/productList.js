import { useContext } from "react";

import { HomepageContext } from "components/pages/Homepage/homepage";

import styles from "./productList.module.scss";
import ProductCard from "components/ProductCard/productCard";

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
  const { initData, setInitData } = useContext(HomepageContext);

  return (
    <div className={styles["product-list"]}>
      {LIST_PRODUCT.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

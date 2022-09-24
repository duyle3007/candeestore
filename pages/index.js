import ProductList from "components/ProductList/productList";
import Slider from "components/Slider/slider";
import { useSelector } from "react-redux";

const SLIDER_LIST = [
  "https://haku.vn/wp-content/uploads/2019/10/website-ban-nuoc-hoa-my-uy-tin-8.jpg",
  "https://curnonwatch.com/blog/wp-content/uploads/2022/05/nuoc-hoa-nam.jpg",
  "http://cdn.tgdd.vn/Files/2022/04/21/1427620/4-meo-phan-biet-nuoc-hoa-that-gia-chi-can-vai-thao-tac-don-gian-202204211028465475.jpg",
];

export default function Home() {
  const loading = useSelector((state) => state.product.loading);
  return (
    <div className="max-w-[1200px] m-auto flex flex-col">
      <Slider sliderList={SLIDER_LIST} />
      <ProductList />
    </div>
  );
}

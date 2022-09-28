import { createContext, useState } from "react";

import ProductList from "components/ProductList/productList";
import Slider from "components/Slider/slider";

import styles from "./homepage.module.scss";

export const HomepageContext = createContext({});

const Homepage = ({ sliders }) => {
  // this is just use for useContext demo, dont have any purpose
  const [sliderData, setSliders] = useState(sliders);
  return (
    <HomepageContext.Provider value={{ sliderData, setSliders }}>
      <div className="max-w-[1200px] m-auto flex flex-col">
        <Slider sliderList={sliders} />
        <ProductList />
      </div>
    </HomepageContext.Provider>
  );
};

export default Homepage;

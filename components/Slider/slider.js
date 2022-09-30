import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import styles from "./slider.module.scss";

const DEFAULT_AUTOPLAY_TIME = 3000;

const Slider = ({ sliderList = [], autoplayTime = DEFAULT_AUTOPLAY_TIME }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const startAutoPlay = setInterval(() => {
      let nextSliderIndex;
      setCurrentSlider((prevTime) => {
        nextSliderIndex = prevTime >= sliderList.length - 1 ? 0 : prevTime + 1;
        return nextSliderIndex;
      });

      const sliderElement = document.querySelector(`#slide-${nextSliderIndex}`);
      sliderElement.style.opacity = 1;
      document.querySelector(`#slide-${currentSlider}`).style.opacity = 0;
    }, autoplayTime);

    return () => clearInterval(startAutoPlay);
  }, [currentSlider]);

  const onNextSlider = () => {
    // Reset slider if we scroll to the end of list
    const nextSliderIndex =
      currentSlider >= sliderList.length - 1 ? 0 : currentSlider + 1;
    setCurrentSlider(nextSliderIndex);

    document.querySelector(`#slide-${nextSliderIndex}`).style.opacity = 1;
    document.querySelector(`#slide-${currentSlider}`).style.opacity = 0;
  };

  const onPrevSlider = () => {
    const prevSliderIndex =
      currentSlider === 0 ? sliderList.length - 1 : currentSlider - 1;
    setCurrentSlider(prevSliderIndex);

    document.querySelector(`#slide-${prevSliderIndex}`).style.opacity = 1;
    document.querySelector(`#slide-${currentSlider}`).style.opacity = 0;
  };

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["next-btn"]} onClick={onNextSlider}>
        <RightOutlined />
      </div>
      <div className={styles["prev-btn"]} onClick={onPrevSlider}>
        <LeftOutlined />
      </div>
      <div className={styles["slider"]}>
        {sliderList.map((slider, index) => (
          <div className={styles["slide-item"]} key={`slider ${index}`}>
            <img
              src={slider}
              className={styles["slides"]}
              style={{
                opacity: index === 0 ? 1 : 0,
                transition: "opacity 0.3s, visibility 0.3s",
              }}
              id={`slide-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

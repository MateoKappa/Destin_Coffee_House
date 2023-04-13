import React, {useState, useEffect} from "react";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import styles from "./tryme.module.scss";
import {supabase} from "../../utils/supabaseCreate";

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [image, setImage] = useState();
  const [images1, setImage1] = useState();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(slides);
  return slides ? (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.right_arrow}
        onClick={nextSlide}
      />
      {slides?.map((slide, index) => {
        console.log(slide);
        return (
          <div
            className={
              index === current ? `${styles.slider_active}` : `${styles.slider}`
            }
            key={index}
          >
            {index === current && (
              <img src={slide} alt="travel image" className={styles.image} />
            )}
          </div>
        );
      })}
    </section>
  ) : null;
};

export default ImageSlider;

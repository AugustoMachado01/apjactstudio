import React from "react";
import Slider from "react-slick";
import styles from "./PriceListSlider.module.css";

const PriceListSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const priceOptions = [
    {
      title: "STANDARD",
      price: "400$",
      duration: "3 hours",
      photos: "60 - 80",
      retouching: "25 items",
      finishing: "10 days",
    },
    {
      title: "PREMIUM",
      price: "550$",
      duration: "4 hours",
      photos: "85 - 90",
      retouching: "40 items",
      finishing: "7 days",
    },
    {
      title: "PRO",
      price: "600$",
      duration: "6 hours",
      photos: "unlimited",
      retouching: "unlimited",
      finishing: "3 days",
    },
  ];

  return (
    <div className={styles.price_slider_container}>
      <h2 className={styles.price_title}>PRICELIST</h2>
      <Slider {...settings}>
        {priceOptions.map((option, index) => (
          <div key={index} className={styles.price_card}>
            <h3 className={styles.price_type}>{option.title}</h3>
            <p className={styles.price_amount}>{option.price}</p>
            <p>Duration: {option.duration}</p>
            <p>Lots Of Photos: {option.photos}</p>
            <p>Detailed Retouching: {option.retouching}</p>
            <p>Finishing: {option.finishing}</p>
            <button className={styles.schedule_button}>
              Photo Session Schedule
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PriceListSlider;

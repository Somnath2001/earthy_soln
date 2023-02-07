import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: require("../../images/img.jpg"), alt: "Image 1" },
    { src: require("../../images/logo.jpg"), alt: "Image 2" },
    { src: require("../../images/logo.jpg"), alt: "Image 3" },
    { src: require("../../images/img.jpg"), alt: "Image 4" },
  ];

  const prevSlide = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > images.length - 1) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div style={styles.carouselContainer}>
      <img
        style={styles.carouselImage}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
      <div style={styles.navigation}>
        <button style={styles.navButton} onClick={prevSlide}>
          {"<"}
        </button>
        {images.map((image, index) => (
          <span
            key={index}
            style={
              currentIndex === index ? styles.activeDot : styles.inactiveDot
            }
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button style={styles.navButton} onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    height: "400px",
    width: "800px",
    position: "relative",
  },
  carouselImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  navigation: {
    position: "absolute",
    bottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
  navButton: {
    background: "transparent",
    border: "none",
    fontSize: "36px",
    cursor: "pointer",
  },
  activeDot: {
    height: "10px",
    width: "10px",
    background: "#000",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 10px",
    cursor: "pointer",
  },
  inactiveDot: {
    height: "10px",
    width: "10px",
    background: "#fff",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 10px",
    cursor: "pointer",
  },
};

export default Slider;

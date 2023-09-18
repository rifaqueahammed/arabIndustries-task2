import React from 'react';
import "./parallaxSlider.css";

function ParallaxSlider({ images }) {
    return (
      <div className="parallax-slider">
        {images.map((image, index) => (
          <div
            className="parallax-slide"
            style={{ backgroundImage: `url(${image})` }}
            key={index}
          ></div>
        ))}
      </div>
    );
  };

export default ParallaxSlider


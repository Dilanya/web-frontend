import React, { useState, useEffect } from "react";
import {generateEndpoint}  from '../Api';

export default function Slider(params) {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const endpoint = generateEndpoint('sliders');

    fetch(endpoint)
      .then(response => response.json())
      .then(data => setSliderImages(data.data))
      .catch(error => console.error("Error fetching slider images:", error));
  }, []); 

  return (
    <section >
      <div className="slider_img layout_two">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {sliderImages.map((image, index) => (
              <li
                key={index}
                data-target="#carousel"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={"carousel-item" + (index === 0 ? " active" : "")}
              >
                <img
                  className="d-block"
                  src={image.attributes.url}
                  alt={"Slide " + (index + 1)}
                  style={{ height: "640px" }}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <i className="carousel-control-prev-icon" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <i className="carousel-control-next-icon" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

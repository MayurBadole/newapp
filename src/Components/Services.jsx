import React from "react";
import { Carousal } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

function Services() {
  return (
    <div>
      <Carousal
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrowa={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">FUll Stack</p>
        </div>

        <div>
          <img src={img2} alt="item2" />
          <p>Frontend Stack</p>
        </div>
      </Carousal>
    </div>
  );
}

export default Services;

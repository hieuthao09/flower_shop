import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import h1 from 'assets/users/h1.jpg';
import h2 from "assets/users/h2.jpg";
import h3 from "assets/users/h3.jpg";
import h4 from "assets/users/h4.jpg";
import h5 from "assets/users/h5.jpg";
import h6 from "assets/users/h6.jpg";
import  "../bodyPage/style.scss";
import {memo} from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  rtl: true
};
const BodyPage = () => {
    return (
      <div className="container">
        <Slider {...settings} className="body-top">
          <div>
            <img src={h1} alt="h1" />
          </div>
          <div>
          <img src={h5} alt="h2" />
          </div>
          <div>
          <img src={h3} alt="h3" />
          </div>
          <div>
          <img src={h4} alt="h4" />
          </div>
          <div>
          <img src={h5} alt="h5" />
          </div>
          <div>
          <img src={h3} alt="h6" width={"370px"} height={"400px"}/>
          </div>
        </Slider>
      </div>
      
    );
  }
export default memo(BodyPage);
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css';

const SampleSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    centerMode: true,
    centerPadding: '200px', 
    focusOnSelect: true, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          centerPadding: "5px",
        }
      },
      {
        breakpoint: 480, 
        settings: {
          centerPadding: "0px", 
        }
      }
    ]
   
    
  };

  return (
    <div style={{ width: '100%', margin: 'auto',  background:"#293349", marginTop:"100px" }} >
    <div style={{ width: '100%',margin: 'auto', paddingTop:"60px", paddingBottom:"50px" }}>
    <Slider {...settings}>
      <div>
        <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
      <div>
      <img src={isMobile ? "/src/assets/Carousel_Mobil/mobil1.webp" : "/src/assets/Carousel_webp/Carousel.webp"} alt="slide1" />
      </div>
    </Slider>
    </div>
</div>
  );
};

export default SampleSlider;

import React from 'react';
import Slider from 'react-slick';

import '../styles/Carousel.css';

const CenterModeSlider = () => {
  const settings = {
    dots: true, // Alt kısımda noktalar göster
    infinite: true, // Sonsuz döngü
    speed: 300, // Geçiş hızı
    slidesToShow: 1, // Aynı anda gösterilecek slayt sayısı
    slidesToScroll: 1, // Kaydırma sırasında geçilecek slayt sayısı
    centerMode: true, // Ortalama modunu aktif et
    centerPadding: '200px', // Ortadaki slaytın yanlarındaki boşluk
    focusOnSelect: true, // Slayta tıklandığında odaklan
    autoplay: false, // Otomatik kaydırma
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 1024, // 1024px altına düşünce
        settings: {
          slidesToShow: 2, // 2 resim göster
        },
      },
      {
        breakpoint: 768, // 768px altına düşünce
        settings: {
          slidesToShow: 1, // 1 resim göster
        },
      },
    ],
    // Otomatik kaydırma hızı (ms cinsinden)
  };

  return (
   <div style={{ width: '100%', margin: 'auto',  background:"#293349", marginTop:"100px" }} >
    <div style={{ width: '100%', margin: 'auto', paddingTop:"60px", paddingBottom:"50px" }}>
      
      <Slider {...settings}>
        <div>
          <a href="#"></a>
          <img src="/src/assets/Carousel_webp/Carousel.webp" alt="Slide 1" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/Gs.webp" alt="Slide 2" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/is_ilanlari_banner.webp" alt="Slide 3" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/Senior_Komuenite_Duyuru_.webp" alt="Slide 4" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/senior_yazilimci_banner_.webp" alt="Slide 5" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/slack_banner_.webp" alt="Slide 1" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/sozluk_banner_.webp" alt="Slide 1" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/testler_banner_.webp" alt="Slide 1" />
        </div>
        <div>
        <a href="#"></a>
          <img src="/src/assets/Carousel_webp/video_egitimler_banner_.webp" alt="Slide 1" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default CenterModeSlider;
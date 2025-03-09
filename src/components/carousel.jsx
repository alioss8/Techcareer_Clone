import React from 'react';
import Slider from 'react-slick';

import '../styles/Carousel.css';

const CenterModeSlider = () => {
  const settings = {
    dots: true, // Alt kısımda noktalar göster
    infinite: true, // Sonsuz döngü
    speed: 300, // Geçiş hızı
    slidesToShow: 3, // Aynı anda gösterilecek slayt sayısı
    slidesToScroll: 1, // Kaydırma sırasında geçilecek slayt sayısı
    centerMode: true, // Ortalama modunu aktif et
    centerPadding: '0', // Ortadaki slaytın yanlarındaki boşluk
    focusOnSelect: true, // Slayta tıklandığında odaklan
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // Otomatik kaydırma hızı (ms cinsinden)
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      
      <Slider {...settings}>
        <div>
          <img src="/src/assets/Carousel.webp" alt="Slide 1" />
        </div>
        <div>
          <img src="/src/assets/Carousel.webp" alt="Slide 2" />
        </div>
        <div>
          <img src="/src/assets/Carousel.webp" alt="Slide 3" />
        </div>
        <div>
          <img src="/src/assets/Carousel.webp" alt="Slide 4" />
        </div>
        <div>
          <img src="/src/assets/Carousel.webp" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default CenterModeSlider;
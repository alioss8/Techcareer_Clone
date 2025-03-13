import React ,  { useState, useEffect } from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import logo1 from "/src/assets/RefLogo/1.webp";
import logo2 from "/src/assets/RefLogo/2.webp";
import logo3 from "/src/assets/RefLogo/3.webp";
import logo4 from "/src/assets/RefLogo/4.webp";
import logo5 from "/src/assets/RefLogo/5.webp";
import logo6 from "/src/assets/RefLogo/7.webp";
import logo7 from "/src/assets/RefLogo/11.webp";
import logo8 from "/src/assets/RefLogo/12.webp";
import logo9 from "/src/assets/RefLogo/14.webp";
import logo10 from "/src/assets/RefLogo/16.webp";
import logo11 from "/src/assets/RefLogo/17.webp";
import logo12 from "/src/assets/RefLogo/20.webp";
import logo13 from "/src/assets/RefLogo/22.webp";

function RefLogo() {


    



    const logolar = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12,
];
 // Logoları rastgele sıralamak için state kullanıyoruz
 const [rastgeleLogolar, setRastgeleLogolar] = useState(logolar);

 // Belirli sayıda logoyu rastgele seçip yerlerini değiştiren fonksiyon
 const bazıLogolariKaristir = () => {
   const kopyaLogolar = [...logolar]; // Orijinal logoları kopyala

   // Rastgele 4 logonun indekslerini seç
   const degisecekIndeksler = [];
   while (degisecekIndeksler.length < 4) {
     const rastgeleIndeks = Math.floor(Math.random() * logolar.length);
     if (!degisecekIndeksler.includes(rastgeleIndeks)) {
       degisecekIndeksler.push(rastgeleIndeks);
     }
   }

   // Seçilen logoları rastgele sırala
   const karistirilmisLogolar = degisecekIndeksler.sort(() => Math.random() - 0.5);

   // Seçilen logoların yerlerini değiştir
   degisecekIndeksler.forEach((indeks, i) => {
     kopyaLogolar[indeks] = logolar[karistirilmisLogolar[i]];
   });

   // State'i güncelle
   setRastgeleLogolar(kopyaLogolar);
 };

 // Timer ile logoları belirli aralıklarla karıştır
 useEffect(() => {
   const interval = setInterval(() => {
     bazıLogolariKaristir();
   }, 1000); // Her 3 saniyede bir logoları karıştır

   // Timer'ı temizle (component unmount olduğunda)
   return () => clearInterval(interval);
 }, []); // Boş dependency array, sadece component mount olduğunda çalışır


  return (
    <div>
       <Container className="mt-5">
      <Row>
        {rastgeleLogolar.map((logo, index) => (
          <Col key={index} xs={6} md={4} lg={2} className="mb-4">
            <div
              style={{
                width: "100%",
                paddingTop: "50%",
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            ></div>
          </Col>
        ))}
      </Row>
    </Container>
  
    </div>
  )
}

export default RefLogo
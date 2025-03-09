import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import EducationCard from "./educationCard";
import '../styles/education.css';

const Education = () => {
    const educationData = [
      { 
        index:"1",
        title: "Docker: Temelden İleri Seviyeye",
        description: "Docker, uygulamarın her ortamda tutarlı bir şekilde çalışmasını saplayan bir konteyner platformudur.Bu eğitimde,Docker'ıb temel prensiplerini ve pratik...",
        image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_05_09f02263c8%2F360x180_05_09f02263c8.png&w=750&q=75",
        teacher:"Hamit",
        extraButton:{
          label: "Docker" }, 
        extraButton2:{
            label: "DevOps" }, 
        extraButton3:{
              label: "BT ve Yazılım" }, 
        level:"Başlangıç",
        time:"13 Saat",
        certifiacate:" Var",
      
      },
      {
        index:"2",
        title: "Unity ile Oyun Geliştirme",
        teacher:"Ahmet Kaya",
        description: "Unity, Oyun gelişitirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde , Unity'nin temel prensiplerini ve pratik uygulamalrını öğreneceksiniz",
        image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_02_1_de3a0c7055%2F360x180_02_1_de3a0c7055.png&w=750&q=75",
        extraButton:{
          label: "Oyun Geliştirme" }, 
        extraButton2:{
            label: "Unity" }, 
        extraButton3:{
              label: "2D" }, 
        level:"Başlangıç",
        time:"6 Saat",
        certifiacate:" Var"
      },
      {
        index:"3",
        title: "VPS (Sanal Özel Sunucu) Eğitimi",
        teacher:"Hamit Mızrak",
        description: "Sanal özel sunucu (VPS),bir uygulamayı veya web sitesini çalıştırmak için gerekli olan tüm yazıllımı ve verileri barındıran bir makinedir",
        image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_vps_8b88790d6e%2F360x180_vps_8b88790d6e.png&w=750&q=75",
        extraButton:{
          label: "Vps" }, 
        extraButton2:{
            label: "Devops" }, 
        extraButton3:{
              label: "Gitlab" },
        level:"Orta",
        time:"4 Saat",
        certifiacate:" Var"
      },
    ];




  return (
          <Container>
            <Row >
                <Col  className='education mt-2'>
                    <h1>Eğitimlerimiz</h1>
                    <p>Teknoloji sektörüne özel hazırlanan ücretsiz yazılım eğitimlerini takip et, tamamla ve video eğitimler sonunda alacağın sertifikan ile <br /> özgeçmişini zenginleştir!</p>
                </Col>
            </Row>
            <Row>
            {educationData.map((item,index) => (
            <Col key={index}  >
            <EducationCard
              
                title={item.title} 
                teacher={item.teacher}
                description={item.description}
                image={item.image}
                extraText={item.extraText} 
                extraButton={item.extraButton}
                extraButton2={item.extraButton2}
                extraButton3={item.extraButton3}
                level={item.level}
                time={item.time}
                certifiacate={item.certifiacate}
            />
            </Col>
            ))}
            </Row>
              <Row>
                      <Col>
                      <Button variant='light' id='jobsbtn'>Tümünü gör</Button>
                      </Col>
                    </Row>      
        </Container>
  )

}

export default Education

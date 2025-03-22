import React from 'react'
import { Link } from 'react-router-dom';
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import EducationCard from "./educationCard";
import '../styles/education.css';

const Tests = () => {
    const educationData = [
      { 
        index:"1",
        title: "C# Teknik Test Başlangıç Seviyesi",
        description: "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalr ile programlama yeteneklerini değerlendirir. ",
        image: "/testswebp/Csharptest.webp",
        level:"Başlangıç",
        time:"16 dakika",
        certifiacate:" 10 Soru",
      
      },
      {
        index:"2",
        title: "Vue.js Teknik Test (Orta Seviye)",
        
        description: "Vue.js framework'ünde bilgimi ölçmek istiyroum diyorsan, doğru yerdesin.Haydi hemen teste başla",
        image: "/testswebp/Vuejs_test.webp",
        level:"Orta",
        time:"15 dakika",
        certifiacate:" 12 Soru"
      },
      {
        index:"3",
        title: "DevOps Teknik Test (Başlangıç Seviye)",
        description: "Yazılım geliştirme endüstrisinde metodoloji olan Devops seviyeni ölçmek için hemen teste başla.",
        image: "/testswebp/Devops_test.webp",
        level:"Başlangıç",
        time:"8dakika",
        certifiacate:" 8 Soru"
      },
      
    ];




  return (
          <Container >
            <Row >
                <Col  className='education'>
                    <h1>Testlerimiz</h1>
                    <p>Teknoloji sektörüne özel hazırlanan ücretsiz testler ile teknik yetkinliklerini anında ölç, aldığın puanları özgeçmişine ekle ve bir adım öne çık!</p>
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
                        <Link to="/TestPage">
                        <Button variant='light' id='jobsbtn'>Tümünü gör</Button>
                        </Link>
                        </Col>
                    </Row>      
        </Container>
  )

}

export default Tests

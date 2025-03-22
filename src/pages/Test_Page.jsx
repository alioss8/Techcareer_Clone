import React from 'react'

import Header from "../components/header";
import  Footer from "../components/Footer";
import  {Col , Stack,Row,Container,Button,Card, Image, Accordion}   from 'react-bootstrap';
import EducationCard from "../components/educationCard";
import '../styles/education.css';

const Test_Page = () => {
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
        index:"1",
        title: "C# Teknik Test Başlangıç Seviyesi",
        description: "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalr ile programlama yeteneklerini değerlendirir. ",
        image: "/testswebp/Csharptest.webp",
        level:"Başlangıç",
        time:"16 dakika",
        certifiacate:" 10 Soru",
      
      },
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
        index:"1",
        title: "C# Teknik Test Başlangıç Seviyesi",
        description: "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalr ile programlama yeteneklerini değerlendirir. ",
        image: "/testswebp/Csharptest.webp",
        level:"Başlangıç",
        time:"16 dakika",
        certifiacate:" 10 Soru",
      
      },
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
        index:"1",
        title: "C# Teknik Test Başlangıç Seviyesi",
        description: "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalr ile programlama yeteneklerini değerlendirir. ",
        image: "/testswebp/Csharptest.webp",
        level:"Başlangıç",
        time:"16 dakika",
        certifiacate:" 10 Soru",
      
      },
      
    ];



 return (
  <div>
    <Header></Header>
    <div style={{ display:"block",backgroundColor:"#273045", height:"%30",marginTop:"5px"}}>
    <Container >

    <Row style={{margin:"0 auto",color:"white" , fontSize:"35px"}}>
      <Col className='col-12 col-md-6 col-lg-4' style={{marginTop:"50px" }}>
        <h1>Testler</h1> 
        <p  style={{fontSize:"25px" ,display:"flex", flexWrap:"wrap"}}>Teknoloji sektörüne özel hazırlanan testler ile teknik yetkinliklerinizi anında ölçün. Güçlü yanlarınızı keşfedin ve gelişim alanlarınızı belirleyin!</p>
        <Button variant="light" className="edu_card_button">Ücretsizdir</Button> 
        <Button className='button-2  btn-light d-none d-md-block mt-5 ' >Keşfet! </Button>
      </Col>
      <Col   >
      <Image style={{width:"500px", marginTop:"50px"}} className=' d-none d-md-block mx-auto' src="https://www.techcareer.net/assets/images/call-to-actions/pages/quizzes/vector.svg" alt="" />
      </Col>
    </Row>
    
    </Container>
    </div>
          <Container >
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
            </Container>
           
        <Container>
          <Row>
              <Col className='mt-2' >
              <Stack direction="horizontal"  className="flex-column flex-md-row mx-auto">
              <Image src='https://www.techcareer.net/assets/images/redirection-area/courses-icon.svg'></Image>
              <Stack direction='vertical '>
              <h4 >Eğitimlerimizi Gördünüz mü</h4>
              <p>Teknoloji sektöründe en çok kullanılan ücretsiz yazılım eğitimlerini takip et, tamamla ve yeteneklerini geliştir!</p>
              </Stack>
              <Button variant='success'>Hemen Keşfet!</Button>
              </Stack>
              </Col>
              </Row>
        </Container>
        <Container>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Testler Hakkında</Accordion.Header>
        <Accordion.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum, dolorum voluptas itaque incidunt quam, quasi ab, mollitia nisi quos eos illum pariatur tempora quae. Dicta consectetur nemo esse commodi autem deleniti aliquid aperiam earum ipsam. Dolorem mollitia necessitatibus omnis!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </Container>
        <Footer></Footer>
        </div>
  )
}
export default  Test_Page
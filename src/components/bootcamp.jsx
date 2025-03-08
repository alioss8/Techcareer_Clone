import React from 'react'
import CustomCard from "./card";
import  {Col, Stack,Row,Container,Button,Card}   from 'react-bootstrap';


const Bootcamp = () => {
    const educationData = [
    {
        id: 1,
    title: "Database Management Bootcamp with MSSQL",
    text: "Ücetsiz öğren , mezun ol , sertifika sahibi ol!",
    image: "/src/assets/cardpng/database.webp",
    date:"06.03.2025",
    extraText:"Son Başvuru:",
    button:{
        label:"Başvur"
    }


    },
    {
        id: 2,
    title: "Pendik Yetkinlik Geliştirme ve İstdihdam Merkezi Endüstriyel Yazılı...",
    text: "Ücetsiz öğren , mezun ol , sertifika sahibi ol!",
    image: "/src/assets/cardpng/pendik.webp",
    date:"09.03.2025",
    extraText:"Son Başvuru:",
    extraButton:{
        label: "İş Birliği"}, 
    button:{
        label:"Başvur"
    }

    }, 
    {
    id: 3,
    title: "Intro to Machine Learning Workshop",
    text: "Üniversitelilere Özel Eğitim Fırsatını Kaçırma",
    image: "/src/assets/cardpng/workshop.webp",
    date:"10.03.2025",
    extraText:"Son Başvuru:",
    button:{
        label:"Başvur"
    }
    }
        
    ];
{
return (
    <Container>
            <Row >
                <Col   id='card_container'className=' text-center'>
                    <h1>Başvuruya Açık Etkinlikler</h1>
                </Col>
            </Row>
            <Row>
            {educationData.map((item,index) => (
            <Col key={index} >
            <CustomCard
                title={item.title}
                description={item.description}
                image={item.image}
                extraText={item.extraText} 
                extraButton={item.extraButton}
                date={item.date}
                button={item.button}
            />
            </Col>
            ))}
            </Row>
            
        </Container>
)
}
}
export default Bootcamp
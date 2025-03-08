import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import '../styles/cards.css'
const data = [
    {
    id: 1,
    title: "Database Management Bootcamp with MSSQL",
    text: "Ücetsiz öğren , mezun ol , sertifika sahibi ol!",
    img: "/src/assets/cardpng/database.webp",
    date:"06.03.2025",
    },
    {
    id: 2,
    title: "Pendik Yetkinlik Geliştirme ve İstdihdam Merkezi Endüstriyel Yazılı...",
    text: "Ücetsiz öğren , mezun ol , sertifika sahibi ol!",
    img: "/src/assets/cardpng/pendik.webp",
    date:"09.03.2025",
    },
    {
    id: 3,
    title: "Intro to Machine Learning Workshop                         ",
    text: "Üniversitelilere Özel Eğitim Fırsatını Kaçırma",
    img: "/src/assets/cardpng/workshop.webp",
    date:"10.03.2025",
    }
];
function Cards() {
return (
    <div>
        <Container>
            <Row >
                <Col   id='card_container'className=' text-center'>
                    <h1>Başvuruya Açık Etkinlikler</h1>
                </Col>
            </Row>
            <Row>
            {data.map((item) => (
                <Col key={item.id}>
                    <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body  className='text-center'>
                        <Card.Title className='cardtitle'>{item.title}</Card.Title>
                        <Card.Text  className='cardtext'>
                        {item.text}
                        </Card.Text>
                        <Button variant="light" size="sm" className='cardbutton'> Bootcamp</Button>
                    </Card.Body>
                    <Card.Footer className="cardfooter ">
                     <div className='footerp'>  <span id='span'>SON BAŞVURU:</span><br />{item.date}</div>
                      <Button variant="light" className='footerbtn' > Başvur</Button>
                    </Card.Footer>
                   
                    </Card>
                </Col>
            ))}
            </Row>
            
        </Container>
    </div>

        );
}
export default Cards
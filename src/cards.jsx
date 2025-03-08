import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
const data = [
    {
    id: 1,
    title: "Database Management Bootcamp with MSSQL",
    text: "React ile dinamik bileşenler oluştur.",
    img: "/src/assets/cardpng/database.webp",
    },
    {
    id: 2,
    title: "",
    text: "Bootstrap ile şık tasarımlar yap.",
    img: "/src/assets/cardpng/workshop.webp",
    },
    {
    id: 3,
    title: "JavaScript",
    text: "JavaScript ile her şeyi kontrol et.",
    img: "/src/assets/cardpng/pendik.webp",
    }
];
function Cards() {
return (
    <div>
        <Container>
            <Row >
            
                <Col className='text-center'>
                    <h1>Başvuruya Açık Etkinlikler</h1>
                </Col>
            </Row>
            <Row>
            {data.map((item) => (
                <Col key={item.id}>
                    <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Ücretsiz öğren , mezun ol , sertifika al!
                        </Card.Text>
                        <Button variant="primary">{item.text}</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            ))}
            </Row>
            
        </Container>
    </div>

        );
}
export default Cards
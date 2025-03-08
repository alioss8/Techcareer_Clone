import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import '../styles/jobpostings.css'
const data = [
    {
    id: 1,
    title: "Siber Savunma Kıdemli Uzmanı",
    text: "Koç Sistem",
    location:"Türkiye(Hibrit)",
    img: "/src/assets/jobsposting/Koç.webp",
    },
    {
    id: 2,
    title: "Data Engineer",
    text: "Cherry",
    location:"İstanbul/Türkiye(Uzaktan)",
    img: "/src/assets/jobsposting/Cherry.webp",
   
    },
    {
    id: 3,
    title: " Senior Software Engineer                      ",
    text: "Papara",
    location:"İstanbul/Türkiye(Uzaktan)",
    img: "/src/assets/jobsposting/Papara.webp",
    },
    {
    id: 4,
    title: "Senior System Engineer",
    text: "Papara",
    location:"Ankara/Turkiye(Hibrit)",
    img: "/src/assets/jobsposting/Papara.webp",
     }
    ,
    {
    id: 5,
    title: "İnformation Security Governance Team Member",
    text: "Allianz Sigorta A.Ş.",
    location:"İstanbul/Türkiye(Hibrit)",
    img: "/src/assets/jobsposting/Allianz.webp",
   
    },
    {
    id: 6,
    title: "Lead -Identity &  Access Mangment                       ",
    text: "Beko Corporate",
    location:"Türkiye(İşyerinde)",
    img: "/src/assets/jobsposting/Beko.webp",
    
    }
];
function Jobposting() {
  return (
    <div > 
    <Container >
        <Row  >
            <div className='jobstext' >
                <h1>İş İlanlarımız</h1>
                <p>Teknoloji kariyerinde ilerlemek için doğru yerdesin. Teknoloji iş ilanlarını keşfetmeye hemen başla!</p>
            </div>

        </Row>
        <Row>
        {data.map((item) => (
            <Col>
            
                <Card id='jobscard' key={item.id} >
                <Card.Img id='jobsimg'  src={item.img}/> 
                <Card.Body > 
                <Card.Title id='cardtitle'>
                {item.title} 
                </Card.Title>
                  <Card.Text id='cardtext'>
                  {item.text}
                    </Card.Text>
                    <span id='cardlocation'> 
                    {item.location}</span> 
                 
                </Card.Body>
                </Card>
              
            
            </Col>
        
        ))}
         
        </Row>
        <Row>
            <Col>
            <Button variant='light' id='jobsbtn'>Tümünü gör</Button>
            </Col>
        </Row>      
    </Container>
    </div>
  )
}

export default Jobposting
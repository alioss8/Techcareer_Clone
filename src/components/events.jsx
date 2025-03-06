import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/events.css'

function Events() {
return (
<div>
<Container>
    <Container>
    <Row  className='content'>
    <Col >
    <h1>Etkinliklerimiz</h1>
    </Col>
    </Row>
    <Row>   
        <Col sm={12} md={6} lg={4}> <Button className='eventsbtn w-100 py-3' id="bootcampbtn" variant="light">Bootcamp</Button></Col>
        <Col sm={12} md={6} lg={4}> <Button className='eventsbtn w-100 py-3' variant="light">Hackathon</Button></Col>
        <Col sm={12} md={6} lg={4} ><Button className='eventsbtn w-100 py-3'   variant="light ">Hiring Challange</Button></Col>
    </Row>
   <Row>
    <Col sm={12} md={6} lg={9}  className='d-flex justify-content-center'>
        <p className='eventsparag' >Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde  çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.</p>
    </Col>
   </Row>
   <Row>
    <Col className='text-center'>
    <Button   sm={12} md={6} lg={4} className='aplicationbtn '   variant="link">Hemen Başvur <i class="bi bi-arrow-right "></i>  </Button>
    </Col>
   </Row>





    </Container>
    </Container>
</div>
)}

export default Events
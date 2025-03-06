import React from 'react'
import  {Col , Stack,Row,Container,Button}   from 'react-bootstrap';
import '../styles/events.css'

function Events() {
return (
<div>
<Container>

    <Row className="justify-content-center">
        <Col xs={11} className="bg-light p-3 m-5">
        <h1>Etkinliklerimiz</h1>
        <Stack  direction="horizontal" className="justify-content-center">
        <Button className='eventsbtn col-4' id="bootcampbtn" variant="light">Bootcamp</Button>
        <Button className='eventsbtn col-4' variant="light">Hackathon</Button>
        <Button className='eventsbtn col-4'   variant="light">Hiring Challange</Button>
        </Stack>
        <Stack>
            <Container>
                <p className='eventsparag' >Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde <br /> çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.</p>
            </Container>
            <Button className='aplicationbtn'   variant="link">Hemen Başvur <i class="bi bi-arrow-right"></i>  </Button>
        </Stack>

        </Col>
    </Row>
    </Container>
</div>
)}

export default Events
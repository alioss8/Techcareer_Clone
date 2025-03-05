import React from 'react'
import  {Col , Stack,Row,Container,Button}   from 'react-bootstrap';


function Events() {
return (
<div>
<Container>
     
    <Row className="justify-content-center">
        <Col xs={11} className="bg-light p-3 border m-5">
        <h1>Etkinliklerimiz</h1>
        <Stack  direction="horizontal" className="justify-content-center">
        <Button variant="light">Bootcamp</Button>
        <Button variant="light">Hackathon</Button>
        <Button variant="light">Hiring Challange</Button>
        </Stack>
        <Stack>
            <Container>
                <p>Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.</p>
            </Container>,
            <Button variant="link">Hemen Başvur</Button>
        </Stack>

        </Col>
    </Row>
    </Container>
</div>
)}

export default Events
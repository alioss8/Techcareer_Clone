import React from 'react'
import '../styles/signup.css'
import { Container ,Row,Col,Button,Card} from 'react-bootstrap';

function Signup() {
  return (
   <Container>
      <Row className='mt-5'>
        <Col className=''>
        <h1> <strong>Techcareer.net’le</strong> teknoloji kariyerinde hep ileriye</h1>
        <p>En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan verici iş fırsatlarına, eğitimlere ve yetenek belirleme testlerine ulaşmak için aramıza katıl.</p>
        <Button className='button-2  btn-light' >Hemen Üye Ol! </Button>
        </Col>
        <Col>
        <img src="/src/assets/desktop-setup.webp" alt="desktup setup" /></Col>
      </Row>

     
   </Container>


  
  )
}

export default Signup
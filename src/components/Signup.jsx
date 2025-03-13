import React from 'react'
import '../styles/signup.css'
import { Container ,Row,Col,Button,Card,Image} from 'react-bootstrap';

function Signup() {
  return (
   <Container >
      <Col> <Image className='m-0 mt-4 d-block d-sm-none  d-flex align-items-center justify-content-center' style={{width:"390px"}} src="/src/assets/desktop-setup.webp" alt="desktup setup" id='desktop-img'fluid /></Col>
      <Row className='mt-5 '  >
        <Col className='' style={{ width: "48rem"}}>
        <h1 className='first-h1'> <strong>Techcareer.net’le</strong> teknoloji kariyerinde hep ileriye</h1>
        <p className='first-text'>En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan verici iş fırsatlarına, eğitimlere ve yetenek belirleme testlerine ulaşmak için aramıza katıl.</p>
        <Button className='button-2  btn-light' >Hemen Üye Ol! </Button>
        </Col>
        <Col >
        <Image className=' d-none d-md-block' src="/src/assets/desktop-setup.webp" alt="desktup setup" id='desktop-img'fluid />
        </Col>
      </Row>

     
   </Container>


  
  )
}

export default Signup
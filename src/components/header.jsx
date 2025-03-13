import React from 'react';
import {Button ,Container,Form,Nav,Navbar,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/header.css'
function Header() {
return (
  <Container  className=" shadow p-2 mt-2">
    <Row>
    <Navbar expand="lg">
    <Container className=" col-12" >
      <Navbar.Brand  className='navbar' href="#">
      <img src="/src/assets/techcareer-logo.svg" alt="" />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className=" my-2  mx-5 my-lg-0  "
          style={{ maxHeight: '400px'}}
          navbarScroll
        >
          <Form className=" d-flex" >
          <Form.Control 
            type="search"
            placeholder=" ⌕ Etkinlik, İş İlanı,Blog Ara"
            className=" navbar-input "
            aria-label="Search "/>
          
        </Form>
                  <Nav.Link className='Nav-link' href="#action2">Etkinlikler</Nav.Link>
                  <Nav.Link className='Nav-link' href="#action2">İş İlanları</Nav.Link>
                  <Nav.Link className='Nav-link'  href="#action2">Eğitimler</Nav.Link>
                  <Nav.Link className='Nav-link'  href="#action2"> <span>🟢</span> Testler </Nav.Link>
                  <Nav.Link className='Nav-link'  href="#action2">Komünite</Nav.Link>
                  <Button  className='navbutton  d-block d-sm-none'    variant="light">Giriş/Üye OL</Button>
        </Nav>
        <Button  className='navbutton d-none d-md-block'    variant="light">Giriş/Üye OL</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Row>
  </Container>
    
);
}

export default Header;

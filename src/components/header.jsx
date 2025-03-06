import React from 'react';
import {Button ,Container,Form,Nav,Navbar} from "react-bootstrap";


function Header() {
return (
    <Navbar expand="lg" className="bg-body-tertiary shadow ">
    <Container className='col-12' >
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
            className=" headerinput "
            aria-label="Search "
            

            
          />
         

        
        </Form>
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Etkinlikler</Nav.Link>
          <Nav.Link href="#action2">İş İlanları</Nav.Link>
          <Nav.Link href="#action2">Eğitimler</Nav.Link>
          <Nav.Link href="#action2"> <span>🟢</span> Testler </Nav.Link>
          <Nav.Link href="#action2">Komünite</Nav.Link>

        </Nav>
        <Button  className='navbutton'    variant="outline-success">Giriş/Üye OL</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header;

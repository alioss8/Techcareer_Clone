import React from "react";
import { Carousel, Card, Button, Container,Row ,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Reference.css'
const CardCarousel = () => {
  const blog_Data = [
    { 
      index:"1",
      title: "Blog",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
      img:"/src/assets/San_referanslar.webp",
      founder:"Lorem ipsum dolor",
      company:"Lorem ipsum dolor sit amet"
    },
    {
      index:"2",
      title: "Teknik Sözlük",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
      img:"/src/assets/San_referanslar.webp",
      founder:"Lorem ipsum dolor",
      company:"Lorem ipsum dolor sit amet"
    },
    {
      index:"3",
      title: "Kariyer Rehberi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
      img:"/src/assets/San_referanslar.webp",
      founder:"Lorem ipsum dolor",
      company:"Lorem ipsum dolor sit amet"
    },

    {
      index:"4",
      title: "Kariyer Rehberi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
      img:"/src/assets/San_referanslar.webp",
      founder:"Lorem ipsum dolor",
      company:"Lorem ipsum dolor sit amet"
    },
    {
      index:"5",
      title: "Kariyer Rehberi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
      img:"/src/assets/San_referanslar.webp",
      founder:"Lorem ipsum dolor",
      company:"Lorem ipsum dolor sit amet"
    },
    {
      index:"6",
      title: "Kariyer Rehberi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
      founder:"Lorem ipsum dolor",
      img:"/src/assets/San_referanslar.webp",
      company:"Lorem ipsum dolor sit amet"

    },
  ];

  
  const groupedData = [];
  for (let i = 0; i < blog_Data.length; i += 3) {
    groupedData.push(blog_Data.slice(i, i + 3));
  }

  return (
    
  <Container className="mt-5 p-4 " style={{backgroundColor:"#FAFAFA"}}>
        <Row><Col>
        <h1 id="ref-h1">Referanslarımız</h1>
        </Col></Row>
      <Carousel interval={null} prevLabel="Prev" nextLabel="Next" >
        {groupedData.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {group.map((item) => (
                <Card key={item.index} style={{ width: "26rem", margin: "0 30px",  height:"31rem"}}>
                    <Card.Body>
                    <Card.Img src={item.img}></Card.Img>
                    <Card.Text   style={{ 
                      maxHeight: "150px",   
                      overflowY: "auto", 
                      paddingRight: "10px",
                      fontSize:"16px",
                      fontWeight:"400",
                      marginTop:"10px"}}
                    >{item.description}</Card.Text>
                      <p className="founder-text">{item.founder}</p> <br />
                      <p className="company-text">{item.company}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
          <Col>
            <Button variant='light' id='jobsbtn'>Tümünü gör</Button>
          </Col>
      </Row>      
    </Container>
  );
};

export default CardCarousel;

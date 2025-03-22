import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  {Col ,Row,Container,Card,Stack,Button}   from 'react-bootstrap';
import '../styles/Reference.css'


function Responsive() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: false, 
    dots:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:1
        }
      }
    ]
};

const blog_Data = [
  { 
    index:"1",
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
    img:"/RefLogo/SAN_referanslar.webp",
    founder:"Lorem ipsum dolor",
    company:"Lorem ipsum dolor sit amet"
  },
  {
    index:"2",
    title: "Teknik Sözlük",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
    img:"/RefLogo/SAN_referanslar.webp",
    founder:"Lorem ipsum dolor",
    company:"Lorem ipsum dolor sit amet"
  },
  {
    index:"3",
    title: "Kariyer Rehberi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan.",
    img:"/RefLogo/SAN_referanslar.webp",
    founder:"Lorem ipsum dolor",
    company:"Lorem ipsum dolor sit amet"
  },

  {
    index:"4",
    title: "Kariyer Rehberi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
    img:"/RefLogo/SAN_referanslar.webp",
    founder:"Lorem ipsum dolor",
    company:"Lorem ipsum dolor sit amet"
  },
  {
    index:"5",
    title: "Kariyer Rehberi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
    img:"/Reflogo/SAN_referanslar.webp",
    founder:"Lorem ipsum dolor",
    company:"Lorem ipsum dolor sit amet"
  },
  {
    index:"6",
    title: "Kariyer Rehberi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
    founder:"Lorem ipsum dolor",
    img:"/RefLogo/SAN_referanslar.webp",
    company:"Lorem ipsum dolor sit amet"

  },
];
return (
  <div className="slider-container " >
      <h1 style={{marginLeft:"55px",marginTop:"50px"}}>Referanslarımız</h1>
  <Slider {...settings} >
  {blog_Data.map((item) => (
      <Container >
          <Row  className=""  >
              <Col style={{}}>
              <Card className="mx-2 p-2 " style={{  backgroundColor:"#FFFFFF"}} >
                  <Card.Body>
              <Stack direction="vertical"  >
                  <Card.Img src={item.img} style={{padding:"10px"}}>
                  </Card.Img>
                  <Card.Text style={{ overflowY: "auto"  ,maxHeight: "150px", padding:"10px"}}>
                  {item.description}
                  </Card.Text>
              </Stack>
              <Stack  className="">
                  <Card.Text style={{textAlign:"center", paddingTop:"10px"}}>
                  {item.founder} <br />
                  {item.company}
                  </Card.Text>
                  </Stack>
                  
                  </Card.Body>
              </Card>
              </Col>
          </Row>
          </Container>
        ))}
    </Slider>
    </div>
);
}
export default Responsive;
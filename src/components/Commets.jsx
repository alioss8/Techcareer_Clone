
import React from "react";
import Slider from "react-slick";
import  {Col ,Row,Container,Card,Stack,Button}   from 'react-bootstrap';

function Responsive() {
  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    variableWidth: false, 
    autoplay: true, 
    autoplaySpeed: 2000,
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

const commets_data=[
    {
        index:"1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Beyzanur_Seyhan.webp",
        name:"Beyzanur Seyhan",
        bootcamps:"lorem2"
    },
    {
        index:"2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Ozan_Celtikci.webp",
        name:"Ozan Celtikçi",
        bootcamps:"lorem2"
    },
    {
        index:"3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Sema_Vargez.webp",
        name:"Sema Vargez",
        bootcamps:"lorem2"
    },
    {
        index:"4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Serhat_Dokumaci.webp",
        name:"Serhat Dokumacı",
        bootcamps:"lorem2"
    },
    {
        index:"5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Beyzanur_Seyhan.webp",
        name:"Beyzanur Seyhan",
        bootcamps:"lorem2"
    },
    {
        index:"6",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Beyzanur_Seyhan.webp",
        name:"Beyzanur Seyhan",
        bootcamps:"lorem2"
    },
    {
        index:"7",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Beyzanur_Seyhan.webp",
        name:"Beyzanur Seyhan",
        bootcamps:"lorem2"
    },
    {
        index:"8",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus sit amet ipsum rhoncus consectetur. Maecenas viverra arcu et dui pharetra, a vulputate enim luctus. Sed quis odio ultrices, consectetur ipsum in, gravida nulla. Phasellus eleifend risus at nibh sollicitudin sagittis. Praesent viverra nibh a pretium efficitur. Sed fermentum dolor purus, at pharetra libero sodales non. Nulla pretium accumsan nisl at tristique. Vestibulum iaculis facilisis eros, ut volutpat purus feugiat eu. Praesent ornare scelerisque odio ac dictum. Proin rutrum placerat eleifend. Donec pretium justo ac risus pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat tortor id leo bibendum, eu vehicula quam dapibus. Morbi faucibus sapien porta lorem volutpat, a venenatis ex accumsan..",
        img:"/Commets/Beyzanur_Seyhan.webp",
        name:"Beyzanur Seyhan",
        bootcamps:"lorem2"
    },
    


]
return (
    <div className="slider-container " >
        <h1 style={{marginLeft:"20px",marginTop:"50px"}}>Bizi Katılımcılarımızdan Dinle</h1>
    <Slider {...settings} >
    {commets_data.map((item) => (
        <Container >
            <Row  className="d-none d-md-block"  >
                <Col style={{}}>
                <Card className="mx-2 p-2 " style={{  backgroundColor:"#FFFFFF"}} >
                    <Card.Body>
                <Stack direction="horizontal"  >
                    <Card.Img src={item.img} style={{padding:"10px"}}>
                    </Card.Img>
                    <Card.Text style={{ overflowY: "auto"  ,maxHeight: "150px", padding:"10px"}}>
                    {item.description}
                    </Card.Text>
                </Stack>
                <Stack  className="">
                    <Card.Text style={{textAlign:"center", paddingTop:"10px"}}>
                    {item.name} <br />
                    {item.bootcamps}
                    </Card.Text>
                    </Stack>
                    
                    </Card.Body>
                </Card>
                </Col>
            </Row>


            <Row className=" d-block d-sm-none" >
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
                    <Card.Text style={{textAlign:"center", paddingTop:"10px" ,fontWeight:"700"}}>
                    {item.name} <br />
                    {item.bootcamps}
                    </Card.Text>
                    </Stack>
                    
                    </Card.Body>
                </Card>
                </Col>
            </Row>
</Container>
      ))}
    </Slider>  
     <Row>
        <Col>
        <Button variant='light' id='jobsbtn' style={{marginLeft:"55px"}}>Tümünü gör</Button>
        </Col>
        </Row>      
    </div>
);
}

export default Responsive;

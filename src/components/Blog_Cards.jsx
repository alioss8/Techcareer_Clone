import React from 'react'
import  {Col , Stack,Row,Container,Button,Card}   from 'react-bootstrap';
import '../styles/Blog_Cards.css';

const Blog = () => {
    const blog_Data = [
      { 
        index:"1",
        title: "Blog",
        description: "Teknoloji haberlerine dair son gelişmeleri ve yenilikleri takip edebileceğin teknoloji bloğu sayfamızı hemen ziyaret edebilirsin.",
      },
      {
        index:"2",
        title: "Teknik Sözlük",
        description: "A’dan Z’ye tüm teknoloji terimlerinin tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin.",
      },
      {
        index:"3",
        title: "Kariyer Rehberi",
        description: "Teknoloji pozisyonlarının ne iş yaptığını, öğrenme yolculuklarını ve tüm bilgilerini incelemeye buradan başlayabilirsin.",
      },
    ];




  return (
          <Container>
            
            <Row>
            {blog_Data.map((item,index) => (
            <Col key={index}  >
            <Card style={{ width: '24rem', height:"auto" , marginTop:"50px", textAlign:"center" }} className='blog_card'>
              <Card.Title className='blog_title'>{item.title}</Card.Title>
              <Card.Text className='blog_description'>
              {item.description}
              </Card.Text>
              <Button variant='light blog_button'>Hemen Keşfet</Button>
            </Card>
            
            </Col>
            ))}
            </Row>
            
        </Container>
  )

}

export default Blog

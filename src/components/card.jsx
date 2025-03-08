// card.jsx
import React from "react";
import { Card, Button,Col } from "react-bootstrap";
import '../styles/cards.css'
const CustomCard = ({ title, description, image, extraButton, extraText, date ,index,button}) => {
    return ( 
        <Col key={index}>
                    <Card style={{ width: '24rem', height:"30rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body  className='text-center'>
                        <Card.Title className='cardtitle'>{title}</Card.Title>
                        <Card.Text  className='cardtext'>
                        {description}
                        </Card.Text>
                        <Button variant="light" size="sm" className='cardbutton'> Bootcamp</Button>
                        {extraButton && (
                            <Button variant="light" className="cardbutton" onClick={extraButton.onClick}>
                            {extraButton.label}</Button>)}
                    </Card.Body>
                    <Card.Footer className="cardfooter  bg-white">
                    <div className='footerp'> <br />{extraText && <Card.Text id="extraText" className="text-muted">{extraText}</Card.Text>}  <br></br><span> {date}</span> </div>
                    {button && (<Button variant="light" className="footerbtn" onClick={button.onClick}>{button.label}</Button>)}
                    </Card.Footer>
                    </Card>
        </Col>




);
};

export default CustomCard;
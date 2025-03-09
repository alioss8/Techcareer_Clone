import React from "react";
import { Card, Button,Col } from "react-bootstrap";
import '../styles/education.css'
const EducationCard = ({ title, description, image, extraButton,extraButton2,extraButton3,extraButton4, extraText, date ,index,button,teacher,level,time,certifiacate}) => {
    return ( 
        <Col key={index}>
                    <Card style={{ width: '24rem', height:"30rem" , padding:"5px" , textAlign:"start" , marginTop:"20px",  }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body  className='edu_cardbody'>
                        <Card.Title className='cardtitle'>{title}</Card.Title>
                        <p className="p_teacher">{teacher}</p>
                        <Card.Text  className='edu_card_text'>
                        {description}
                        </Card.Text>
                        
                        {extraButton && (
                            <Button variant="light" className="edu_card_button">
                            {extraButton.label}</Button>)}

                        {extraButton2&& (
                            <Button variant="light" className="edu_card_button" >
                        {extraButton2.label}</Button>)}

                        {extraButton3&& (
                            <Button variant="light" className="edu_card_button" >
                        {extraButton3.label}</Button>)}

                        {extraButton4&& (
                            <Button variant="light" className="edu_card_button" >
                        {extraButton4.label}</Button>)} 

                    </Card.Body>
                    <Card.Footer className="cardfooter  bg-white" id="edu_card_footer">
                    <i class="bi bi-bar-chart"> {level} </i> 
                    <i class="bi bi-stopwatch-fill"> {time} </i>
                    <i class="bi bi-person-vcard"> {certifiacate} </i>
                    </Card.Footer>
                    </Card>
        </Col>




);
};

export default EducationCard;
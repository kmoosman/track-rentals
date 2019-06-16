import React, { Component } from 'react';
import { Card, Button, Badge, Form } from "react-bootstrap";



class RentalInput extends Component {

    
    
  render(props) {
    
    return(
        <Form>
            <Form.Group controlId="formEventName">
                <Form.Label>Particpant</Form.Label>
                <Form.Control onChange={(event) => console.log("testing")} value="" type="name" placeholder="enter name" />
            </Form.Group>
            
           
        </Form>   
    );
  }
};

const buttonStyle = {
    width: '45%',
    margin: '5px',
  };

const eventCard = {
    width: '22%',
    margin: '20px'
}

const badge = {
    float: 'right'
}



export default RentalInput;
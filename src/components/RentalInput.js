import React, { Component } from 'react';
import { Button, Form, Col } from "react-bootstrap";

class RentalInput extends Component {

  render(props) {
    
    return(
        <Form>
            <Form.Group controlId="formEventName">
            <Form.Row>
                <Col style={lableCol}>
                <Form.Control onChange={(event) => console.log("testing")} value="" type="name" placeholder="Enter a particpant" /> 
                </Col>
                <Col style={buttonCol}>
                <Button variant="primary" style={buttonStyle} onClick={ () => console.log('you clicked to return') }>Rent</Button>
                </Col>
            </Form.Row>
            </Form.Group>

        </Form>   
    );
  }
};

const buttonStyle = {
    float: 'right',
    width: '100%'
    
  };

const buttonCol = {
    flexGrow: '1',
}

const lableCol = {
    flexGrow: '3'
}


export default RentalInput;
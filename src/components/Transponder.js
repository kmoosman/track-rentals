import React, { Component } from 'react';
import { Card, Button, Badge, Form } from "react-bootstrap";

class Event extends Component {

    
    
  render(props) {

    const badgeColor = (this.props.status === "Available") ? 'success' : 'danger'
    
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">Transponder {this.props.number} 
                <Badge pill style={badge} variant={badgeColor}>
                    {this.props.status}
                </Badge>
            </Card.Header>
            <Card.Body   style={this.props.background}>
            <Form>
                <Form.Group controlId="formEventName">
                    <Form.Label>Particpant</Form.Label>
                    <Form.Control onChange={(event) => console.log("testing")} value="" type="name" placeholder="enter name" />
                </Form.Group>
                
                <Button variant="outline-primary"  type="submit" style={buttonStyle} onClick={ () => console.log('you clicked to checkout') }>Checkout</Button>
                <Button variant="outline-secondary" style={buttonStyle} onClick={ () => console.log('you clicked to return') }>Return</Button>
                </Form>
            </Card.Body>
        </Card>
                
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



export default Event;
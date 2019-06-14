import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";

class Event extends Component {

  render() {
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">USGP Round 1 </Card.Header>
            <Card.Body>
                <Card.Title>April 2nd, 2019</Card.Title>
                <Card.Text>
                Austin, Texas
                </Card.Text>
                <Button variant="outline-danger" style={buttonStyle} onClick={ () => console.log('you clicked delete') }>Delete</Button>
            </Card.Body>
        </Card>
                
    );
  }
};

const buttonStyle = {
    width: '200px',
  };

const eventCard = {
    width: '20%',
    margin: '20px'
}

export default Event;
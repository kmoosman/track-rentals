import React, { Component } from 'react';
import { Card, Button, Badge, Form } from "react-bootstrap";
import RentalInput from "./RentalInput"
import RentalName from "./RentalName"

class Event extends Component {
    
  render(props) {

    const badgeColor = (this.props.rented === false) ? 'success' : 'danger'
    console.log("i'm logging" + badgeColor)
    const rented = this.props.rented
    let input
    let status
    let styling

    if (!rented) {
        input = <RentalInput /> ;
        status = "Available"
        styling = success
      } else {
        input = <RentalName />;
        status = "Rented"
        styling = danger
      }
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">Transponder {this.props.number} 
                <Badge pill style={badge} variant={badgeColor}>
                    {status}
                </Badge>
            </Card.Header>
            <Card.Body   style={styling}>
            {input} 
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
    width: '27%',
    margin: '20px'
}

const success = {
    backgroundColor: '#ecffdd'
}

const danger = {
    backgroundColor: '#fce6e5'
}

const badge = {
    float: 'right'
}



export default Event;
import React, { Component } from 'react';
import { Card, Button, Badge, Form } from "react-bootstrap";
import RentalInput from "./RentalInput"
import RentalName from "./RentalName"

class Event extends Component {
    
  render(props) {

    const badgeColor = (this.props.rented === false) ? 'success' : 'danger'
    const rented = this.props.rented
    let input

    if (!rented) {
        input = <RentalInput /> ;
      } else {
        input = <RentalName />;
      }
    
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">Transponder {this.props.number} 
                <Badge pill style={badge} variant={badgeColor}>
                    {this.props.status}
                </Badge>
            </Card.Header>
            <Card.Body   style={this.props.background}>
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

const badge = {
    float: 'right'
}



export default Event;
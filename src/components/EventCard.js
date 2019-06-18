import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { connect } from 'react-redux';

class EventCard extends Component {


  render() {
    const eventID = this.props.match.params.key - 1
    const event = this.props.events[eventID]
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">{event.name}</Card.Header>
            <Card.Body>
                <Card.Title>{event.date}</Card.Title>
                <Card.Text>
                {event.location}
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

const mapStateToProps = (state) => {
    return { events: state.events };
  };
  
  
export default connect(mapStateToProps)(EventCard);
  
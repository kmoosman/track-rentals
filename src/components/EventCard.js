import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import { connect } from 'react-redux';
import TransponderContainer from './TransponderContainer';

class EventCard extends Component {

    

  render() {
    const eventID = this.props.match.params.key 
    const event = this.props.events[eventID - 1]
    
    return(
        
        <Card style={eventCard}>
            <Card.Header as="h5">{event.name}</Card.Header>
            <Card.Body>
                <Card.Title>{event.date}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                {event.transponders.map((transponder, id) => <TransponderContainer key={id} number={transponder.number} eventID={eventID} rented={transponder.rented} rented_by={transponder.rented_by} event={event} />)}
               
            </Card.Body>
        </Card>
                
    );
  }
};

// const buttonStyle = {
//     width: '200px',
//   };

const eventCard = {
    marginTop: '20px',
    marginLeft: '-110px',
    width: '120%'
}

const mapStateToProps = (state) => {
    return { events: state.events};
  };
  
  
export default connect(mapStateToProps)(EventCard);
  
import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import TransponderContainer from './TransponderContainer';

class EventCard extends Component {
    renderTransponders = () => this.props.transponders.map((transponder, id) => <TransponderContainer key={id} number={transponder.number}  rented={transponder.rented} transponder={transponder} />)

  render() {
    const eventID = this.props.match.params.key - 1
    const event = this.props.events[eventID]
    
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">{event.name}</Card.Header>
            <Card.Body>
                <Card.Title>{event.date}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                {this.renderTransponders()}
               
            </Card.Body>
        </Card>
                
    );
  }
};

const buttonStyle = {
    width: '200px',
  };

const eventCard = {
    marginTop: '20px',
    marginLeft: '-110px',
    width: '120%'
}

const mapStateToProps = (state) => {
    return { events: state.events,
             transponders: state.transponders };
  };
  
  
export default connect(mapStateToProps)(EventCard);
  
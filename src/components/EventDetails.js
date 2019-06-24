import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import TransponderContainer from './TransponderContainer';

class EventDetails extends Component {
 

  render(props) {

    
    return(
    // <div >
        <Card style={eventCard} >
            <Card.Header as="h5">{this.props.name}</Card.Header>
            <Card.Body>
                <Card.Title>{this.props.date}</Card.Title>
                <Card.Text style={buttonStyle}>
               {this.props.location}
               <br/>
                <Link to={`/events/${this.props.id}`} >
                 <Button variant="primary" style={buttonStyle}>Rentals</Button>
                </Link> 
                </Card.Text>
               
            </Card.Body>
        </Card>
    // </div>
                
    );
  }
};

const buttonStyle = {
    textAlign: 'center',
    marginTop: '10px'

  };

const eventCard = {
    margin: '20px',
    display: 'inline-flex'
}

const mapStateToProps = (state) => {
    return { transponders: state.transponders };
  };


  
   export default connect(mapStateToProps)(EventDetails);
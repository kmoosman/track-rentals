import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Badge } from "react-bootstrap";
import RentalInput from "./RentalInput"
import RentalName from "./RentalName"
import { returnTransponder } from '../actions/transponderActions'

class TransponderContainer extends Component {
    
  render(props) {
      const event = this.props.events[this.props.eventID - 1]
      const transponder = event.transponders[this.props.number -1]

      

    const badgeColor = (transponder.rented === false) ? 'success' : 'danger'
    
    const rented = transponder.rented
    let input
    let status
    let styling

    if (!rented) {
        input = <RentalInput transponder={transponder} rentTransponder={this.props.rentTransponder} /> ;
        status = "Available"
        styling = success
      } else {
        input = <RentalName  transponder={transponder} returnTransponder={this.props.returnTransponder} />;
        status = "Rented"
        styling = danger
      }
    return(
        <Card style={eventCard}>
            <Card.Header as="h5">Transponder {transponder.number} 
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

// const buttonStyle = {
//     width: '45%',
//     margin: '5px',
//   };

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

const mapStateToProps = (state) => {
    return { events: state.events, transponders: state.events.transponders};
  };

const mapDispatchToProps = dispatch => ({
    // returnTransponder: transponder => dispatch({ type: 'RETURN_TRANSPONDER', transponder: transponder }),
    returnTransponder: transponder => dispatch(returnTransponder(transponder)),
    rentTransponder: transponder => dispatch({ type: 'RENT_TRANSPONDER', transponder: transponder }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TransponderContainer);
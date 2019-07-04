import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Badge } from "react-bootstrap";
import RentalInput from "./RentalInput"
import RentalName from "./RentalName"
import { returnTransponder, rentTransponder } from '../actions/transponderActions'

class TransponderContainer extends Component {
    
  render(props) {
   
    const badgeColor = (this.props.rented === false) ? 'success' : 'danger'
    
    const rented = this.props.rented
    let input
    let status
    let styling

    if (!rented) {
        input = <RentalInput transponder={this.props} rentTransponder={this.props.rentTransponder} /> ;
        status = "Available"
        styling = success
      } else {
        input = <RentalName  transponder={this.props} returnTransponder={this.props.returnTransponder} />;
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

// const mapStateToProps = (state) => {
//     return { events: state.events };
//   };

const mapDispatchToProps = dispatch => ({
    // returnTransponder: transponder => dispatch({ type: 'RETURN_TRANSPONDER', transponder: transponder }),
    returnTransponder: transponder => dispatch(returnTransponder(transponder)),
    rentTransponder: transponder => dispatch(rentTransponder(transponder)),
})

export default connect(null, mapDispatchToProps)(TransponderContainer);
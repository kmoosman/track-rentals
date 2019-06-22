import React, { Component } from 'react';
import { Button, Form, Col } from "react-bootstrap";

class RentalInput extends Component {

    constructor() {
        super();
        this.state = {
          number: "",
          rented: true,
          rented_by: "",
          eventID: ""
        };
      }

    rentTransponder = (event) => {
        event.preventDefault()

        this.props.rentTransponder(this.state)
        
    }

    handleChange(event) {
        this.setState({
          number: this.props.transponder.number,
          rented_by: event.target.value,
          eventID: this.props.transponder.eventID
        });
        
      }

  render(props) {

    return(
        <Form>
            <Form.Group controlId="formEventName">
            <Form.Row>
                <Col style={lableCol}>
                <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.rented_by} type="name" placeholder="Enter a particpant" /> 
                </Col>
                <Col style={buttonCol}>
                <Button variant="primary" style={buttonStyle} onClick={ (event) => this.rentTransponder(event) }>Rent</Button>
                </Col>
            </Form.Row>
            </Form.Group>

        </Form>   
    );
  }
};

const buttonStyle = {
    float: 'right',
    width: '100%'
    
  };

const buttonCol = {
    flexGrow: '1',
}

const lableCol = {
    flexGrow: '3'
}

// const mapDispatchToProps = dispatch => ({
//     addRentalName: transponder => dispatch({ type: 'RENT_TRANSPONDER', transponder: transponder }),
//   })
  
  export default (RentalInput);
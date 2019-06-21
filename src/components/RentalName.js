import React, { Component } from 'react';
import {  Button } from "react-bootstrap";


class RentalName extends Component {

    returnTransponder(event) {
        event.preventDefault();
        // console.log(this.props.transponder)
        this.props.returnTransponder(this.props.transponder)
    }

    render(props) {

        return (
            <div style={row}>
            <p style={rowItem1}>John Williams </p>
            <Button style={rowItem2} variant="outline-secondary" onClick={ (event) => this.returnTransponder(event) }>Return</Button>
            </div>
        )
  }
}

const row = {
    display: 'flex',
  }; 

const rowItem1 = {
    flexGrow: '12',
    paddingTop: '5px',
    paddingBottom: '-5px',
    fontSize: '18px',
    color: '#307CF6'
}

const rowItem2 = {
    flexGrow: '1',
    height: '30%',
}

export default RentalName;
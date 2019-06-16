import React from 'react';
import {  Button } from "react-bootstrap";


const RentalName = props => {
    return (
        <div style={row}>
        <p style={rowItem1}>John Williams </p>
        <Button style={rowItem2} variant="outline-secondary" onClick={ () => console.log('you clicked to return') }>Return</Button>
        </div>
        )
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
import React from 'react'
import { Card, Button, Badge, Form } from "react-bootstrap";

const NewButton = props => {
    if (this.props.status === "Available") {
        return (
            <div>
            <p>hello </p>
            <Button variant="outline-primary"  type="submit" style={buttonStyle} onClick={ () => console.log('you clicked to checkout') }>Checkout</Button>
            </div>
          )
    } else {
        return (
            <div>
            <p>hello </p>
            <Button variant="outline-secondary" style={buttonStyle} onClick={ () => console.log('you clicked to return') }>Return</Button>
            </div>
          )
    }
   
  }

  const buttonStyle = {
    width: '45%',
    margin: '5px',
  };

export default NewButton;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Button } from "react-bootstrap";

class NewButton extends Component {
    

    render(props) {
        if (this.props.status === "Available") {
            return (
                <div>
                <Button variant="outline-primary"  type="submit" style={buttonStyle} ></Button>
                </div>
            )
        } else {
            return (
                <div>
                <Button variant="outline-warning" style={buttonStyle}></Button>
                </div>
            )
        }
   
  }
}

  const buttonStyle = {
    width: '45%',
    margin: '5px',
  };

  const mapDispatchToProps = dispatch => ({
    rentTransponder: transponder => dispatch({ type: 'RENT_TRANSPONDER', transponder:  ""})
    })
      

export default connect(null, mapDispatchToProps)(NewButton);
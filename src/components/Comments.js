import React, { Component } from 'react'
import { Form, Button, Card } from "react-bootstrap";


class Comments extends Component {

  renderComments = () => this.props.comments.map((comment, id) => <Card><h1>{comment}</h1></Card>)
  render(props) {
    return(
        <div>
        {this.renderComments()}
        </div>
  
   );
  }
};



export default (Comments);
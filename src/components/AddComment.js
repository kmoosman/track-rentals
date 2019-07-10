import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import Comments from './Comments'

class AddComment extends Component {

  constructor() {
    super();
    this.state = {
      comments: [],
      currentComment: ""
    };
  }

  handleChange(event) {
    event.preventDefault();
    let comment = event.target.value;
    this.setState({currentComment: comment}) 

  }

  handleSubmit(event){
    event.preventDefault()
    console.log(event.target.value)
    let comments = this.state.comments
    let comment = this.state.currentComment;
    this.setState({comments: [...comments, comment]})  
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <h1>Add a new comment</h1>
        <Form className="Form" onSubmit={e => this.handleSubmit(e)}>
        <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} name="comment" value={this.state.comment} type="text" placeholder="Enter comment" />
        </Form.Group>

        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
        <Comments comments={this.state.comments} /> 
     </div>
   );
  }
};



export default (AddComment);
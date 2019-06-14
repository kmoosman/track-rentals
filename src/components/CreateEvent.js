import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap";

class CreateEvent extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      location: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.props.addTodo(this.state)
    // this.setState({text: ''})
  }

  handleChange(event) {
      console.log("this is working")
    this.setState({
      name: event.target.value,
      date: event.target.value,
      location: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <h1>Create New Event </h1>
        <Form className="Form">
        <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.name} type="name" placeholder="USGP Round 1" />
        </Form.Group>
        <Form.Group controlId="formEventDate">
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.date} type="date" placeholder="date" />
        </Form.Group>
        <Form.Group controlId="formEventLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.location} type="locatino" placeholder="Austin, TX" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addEvent: formData => dispatch({ type: 'ADD_EVENT', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateEvent);
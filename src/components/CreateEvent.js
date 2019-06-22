import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap";

class CreateEvent extends Component {

  constructor() {
    super();
    this.state = {
      formValues: {},
    };
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})

  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.formValues);
    console.log("you have submitted this event, congrats - you're winner")
    this.props.addEvent(this.state.formValues)
    let path = `/events`;
    this.props.history.push(path);
 
    // return  <Redirect to='/events' />
  }

  render() {
    return(
      <div>
        <h1>Create New Event </h1>
        <Form className="Form" onSubmit={e => this.handleSubmit(e)}>
        <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} name="name" value={this.state.name} type="name" placeholder="USGP Round 1" />
        </Form.Group>
        <Form.Group controlId="formEventDate">
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} name="date" value={this.state.date} type="date" placeholder="date" />
        </Form.Group>
        <Form.Group controlId="formEventLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control onChange={(event) => this.handleChange(event)} name="location" value={this.state.location} type="text" placeholder="Austin, TX" />
        </Form.Group>

        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addEvent: formData => dispatch({ type: 'ADD_EVENT', newEvent: formData }),
})

export default connect(null, mapDispatchToProps)(CreateEvent);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
// import TransponderContainer from './components/TransponderContainer';
import EventDetails from './EventDetails';


class EventsContainer extends Component {
  // renderTransponders = () => this.props.transponders.map((transponder, id) => <TransponderContainer key={id} number={transponder.number}  rented={transponder.rented} transponder={transponder} />)
  renderEvents = () => this.props.events.map((event, id) => <EventDetails key={id} name={event.name}  date={event.date} location={event.location} />)
  debugger
  render() {
    return (
      <div>
        {this.renderEvents()}
      </div>
    );
  }
  
}

const available = {
  backgroundColor: '#efffd3',
  float: 'right'
}

const unavailable = {
  backgroundColor: '#ffd3d3',
  float: 'right'
}

const title = {
  color: '#9842f4',
  fontSize: '50px'

}

const subTitle = {
  color: '#4092E7',
  marginTop: '20px'
}

const header = {
  textAlign: 'center'
}

const logo = {
  height: '250px',
  width: '300px'
}

const body = {
  marginTop: '40px',
  textAlign: 'center'
}

const cta = {
  marginTop: '30px',
  width: '150px',
  height: '50px'
}


const mapStateToProps = (state) => {
  return { events: state.events };
};


 export default connect(mapStateToProps)(EventsContainer);

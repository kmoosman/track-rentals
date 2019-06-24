import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventActions'


import EventDetails from './EventDetails';


class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents()
  }
  renderEvents = () => this.props.events.map((event, id) => <EventDetails key={id} id={id + 1} name={event.name}  date={event.date} location={event.location} />)
  
  
  render() {
    return (
      <div>
        {this.renderEvents()}
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return { events: state.events };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  

})


 export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';


import EventDetails from './EventDetails';


class EventsContainer extends Component {
  renderEvents = () => this.props.events.map((event, id) => <EventDetails id={id + 1} name={event.name}  date={event.date} location={event.location} />)
  
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


 export default connect(mapStateToProps)(EventsContainer);

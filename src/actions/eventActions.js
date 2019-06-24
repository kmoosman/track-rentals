export function fetchEvents() {

  var request = 'http://localhost:3001/api/events.json'
    return (dispatch) => {
      dispatch({ type: 'LOADING_EVENTS' });
      return fetch(request)
        .then(response => response.json())
        
        .then(eventData => dispatch({
          type: 'FETCH_EVENTS',
          payload: eventData
        }));
    }
}

export function addEvent(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_EVENT' });
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var dateString = state.date; 
      var dateObject = new Date(dateString);

      const event = {
        name: state.name,
        date: dateObject.toLocaleDateString("en-US", options),
        location: state.location
      }
      console.log(event)
      fetch('http://localhost:3001/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      })
        .then(response => response.json())
        .then(eventJSON => {
  
          dispatch({
          type: "ADDED_EVENT",
          name: eventJSON.name,
          date: eventJSON.date,
          location: eventJSON.location,
        })
      });
    }

    
  }

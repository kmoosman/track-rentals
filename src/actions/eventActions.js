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
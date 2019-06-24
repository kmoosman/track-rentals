// export function returnTransonder() {

//     var request = 'http://localhost:3001/api/events.json'
//       return (dispatch) => {
//         dispatch({ type: 'LOADING_EVENTS' });
//         return fetch(request)
//           .then(response => response.json())
          
//           .then(eventData => dispatch({
//             type: 'FETCH_EVENTS',
//             payload: eventData
//           }));
//       }
//   }
  
//   export function returnTransponder(transponder) {

//         var request = 'http://localhost:3001/api/events.json'
//           return (dispatch) => {
//             dispatch({ type: 'RETURNING_TRANSPONDERS' });
//             return fetch(request)
//               .then(response => response.json())
              
//               .then(eventData => dispatch({
//                 type: 'FETCH_EVENTS',
//                 payload: eventData
//               }));
//           }
//       }
      
export function returnTransponder(transponder) {
    console.log(transponder)
        return dispatch => {
          dispatch({ type: 'RETURNING_TRANSPONDER' });
            const updatedTransponder = {
              number: transponder.number,
              rented: transponder.rented,
              rented_by: transponder.rented_by,
              event_id: transponder.eventID
            }
        
            fetch('http://localhost:3001/api/events/' + transponder.eventID, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(updatedTransponder)
            })
              .then(response => response.json())
              .then(JSON => {
                console.log(JSON)
        
                dispatch({
                type: "RETURNED_TRANSPONDER",
                event: JSON

              })
            });
          }
      
}
      
      
    
  
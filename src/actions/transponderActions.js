export function rentTransponder(transponder) {
  console.log(transponder)
      return dispatch => {
        dispatch({ type: 'RENTING_TRANSPONDER' });
          const updatedTransponder = {
            number: transponder.number,
            rented: transponder.rented,
            rented_by: transponder.rented_by,
            event_id: transponder.event_id
          }
      
          fetch('http://localhost:3001/api/events/' + transponder.event_id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTransponder)
          })
            .then(response => response.json())
            .then(JSON => {
              console.log(JSON)
      
              dispatch({
              type: "RENT_TRANSPONDER",
              transponder: JSON

            })
          });
        }
    
}
      
export function returnTransponder(transponder) {
    console.log(transponder)
        return dispatch => {
          dispatch({ type: 'RETURNING_TRANSPONDER' });
            const updatedTransponder = {
              number: transponder.number,
              rented: transponder.rented,
              rented_by: "",
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
                transponder: JSON

              })
            });
          }
      
}
      
      
    
  
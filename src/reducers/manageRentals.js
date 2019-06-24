export default function manageRentals(
  state = {
    events: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    // case 'ADD_EVENT':
    //   var options = { year: 'numeric', month: 'long', day: 'numeric' };
    //   var dateString = action.newEvent.date; 
    //   var dateObject = new Date(dateString);

    //   const event = {
    //     name: action.newEvent.name,
    //     date: dateObject.toLocaleDateString("en-US", options),
    //     location: action.newEvent.location
    //   }
    //   return { ...state, events: [...state.events, event]}
      
  case 'ADDED_EVENT':
  const newEvent = { name: action.name, date: action.date, location: action.location };

  return { ...state, events: [...state.events, newEvent]}

  case 'ADDING_EVENT':
  return { ...state, adding: true }

  case 'LOADING_EVENTS':
      return state

  case 'FETCH_EVENTS':
  return { ...state, loading: false, events: action.payload }



  case 'RETURNED_TRANSPONDER':
  console.log("I am soooo ffffffing frustrated")
    console.log(state.events[action.transponder.event_id - 1].transponders)
      function updateTransponderArray(array, action) {
        return array.map((item, index) => {
          if (index !== action.transponder.number - 1 ) {
            return item
          } else {
            return {
              number: action.transponder.number, rented: false, rented_by: "",
              ...action.item
              }
            }
          })
        }

      function updateEventsArray(array, action) {
          return array.map((item, index) => {
            if (index !== action.transponder.event_id - 1) {
              // This isn't the item we care about - keep it as-is
              console.log(item )
              return item
            } else {
              return {...item,
                      transponders: updatedArray}
            }
         })
       }   
     
      const updatedArray = updateTransponderArray(state.events[action.transponder.event_id - 1].transponders, action)
      const updateEvents = updateEventsArray(state.events, action)
   
  return { ...state, 
    events:
    updateEvents
      } 

  case 'RENT_TRANSPONDER':
        console.log(action)
    // const rentalUpdates = updateTransonderRental(state.events[action.transponder.eventID].transponders, action)
    // const eventUpdates = updatedEventsArray(state.events, action)
  
    //   function updateTransonderRental(array, action) {
    //     return array.map((item, index) => {
    //       if (index !== action.transponder.number - 1 ) {
    //         return item
    //       } else {
    //         return {
    //           number: action.transponder.number, rented: true, rented_by: action.transponder.rented_by,
    //           ...action.item
    //           }
    //         }
    //       })
    //     }

    //   function updatedEventsArray(array, action) {
    //       return array.map((item, index) => {
    //         if (index !== action.transponder.eventID) {
    //           // This isn't the item we care about - keep it as-is
    //           console.log(item )
    //           return item
    //         } else {
    //           return {...item,
    //                   transponders: rentalUpdates}
    //         }
    //       })
    //     }   
        // return { ...state, 
        //   events:
        //   eventUpdates,
        //     }  
        return state

     //enter new case here   
    default:
      return state;
  }
  
}


//keep this just in case, but it's no longer needed 
 // console.log(action)
  //     function updateTransponderArray(array, action) {
  //       return array.map((item, index) => {
  //         if (index !== action.transponder.number - 1 ) {
  //           return item
  //         } else {
  //           return {
  //             number: action.transponder.number, rented: false, rented_by: "",
  //             ...action.item
  //             }
  //           }
  //         })
  //       }

  //     function updateEventsArray(array, action) {
  //         return array.map((item, index) => {
  //           if (index !== action.transponder.eventID) {
  //             // This isn't the item we care about - keep it as-is
  //             console.log(item )
  //             return item
  //           } else {
  //             return {...item,
  //                     transponders: updatedArray}
  //           }
  //        })
  //      }   
     
  //     const updatedArray = updateTransponderArray(state.events[action.transponder.eventID].transponders, action)
  //     const updateEvents = updateEventsArray(state.events, action)
   
  // return { ...state, 
  //   events:
  //   [...state.events, action.event]
  //     } 
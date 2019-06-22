export default function manageRentals(
  state = {
    events: [{name: "USGP Round 1", date: "April 24th, 2019", location: "Austin, TX", 
            transponders: [{number: 1, rented: true, rented_by: "John Williams" },
                          {number: 2, rented: false, rented_by: ""}] },
    {name: "USGP Round 2", date: "June 26th, 2019", location: "Tooele, UT", 
    transponders: [{number: 1, rented: true, rented_by: "John Williams"},
                  {number: 2, rented: false, rented_by: ""}]}
            ],
    loading: false
  },
  action
) {
  switch (action.type) {
    
    case 'ADD_EVENT':
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var dateString = action.newEvent.date; 
      var dateObject = new Date(dateString);

      const event = {
        name: action.newEvent.name,
        date: dateObject.toLocaleDateString("en-US", options),
        location: action.newEvent.location
      }
      return { ...state, events: [...state.events, event]}

 
  case 'RETURN_TRANSPONDER':
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
            if (index !== action.transponder.eventID) {
              // This isn't the item we care about - keep it as-is
              console.log(item )
              return item
            } else {
              return {...item,
                      transponders: updatedArray}
            }
         })
       }   
     
      const updatedArray = updateTransponderArray(state.events[action.transponder.eventID].transponders, action)
      const updateEvents = updateEventsArray(state.events, action)
   
    return { ...state, 
      events:
      updateEvents,
        }  
                
  case 'RENT_TRANSPONDER':
        console.log(action)
    const rentalUpdates = updateTransonderRental(state.events[action.transponder.eventID].transponders, action)
    const eventUpdates = updatedEventsArray(state.events, action)
  
      function updateTransonderRental(array, action) {
        return array.map((item, index) => {
          if (index !== action.transponder.number - 1 ) {
            return item
          } else {
            return {
              number: action.transponder.number, rented: true, rented_by: action.transponder.rented_by,
              ...action.item
              }
            }
          })
        }

      function updatedEventsArray(array, action) {
          return array.map((item, index) => {
            if (index !== action.transponder.eventID) {
              // This isn't the item we care about - keep it as-is
              console.log(item )
              return item
            } else {
              return {...item,
                      transponders: rentalUpdates}
            }
          })
        }   
        return { ...state, 
          events:
          eventUpdates,
            }  

     //enter new case here   
    default:
      return state;
  }
  
}

  
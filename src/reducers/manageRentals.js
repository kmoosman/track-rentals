export default function manageRentals(
  state = {
    events: [{name: "USGP Round 1", date: "April 24th, 2019", location: "Austin, TX", 
            transponders: [{number: 1, rented: true, rented_by: "" },
                          {number: 2, rented: false, rented_by: ""}] },
    {name: "USGP Round 2", date: "June 26th, 2019", location: "Tooele, UT", 
    transponders: [{number: 1, rented: true, rented_by: ""},
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
      // const eventSelected = state.events[action.transponder.eventID]
      const transponderIndex = action.transponder.number - 1 
      // console.log(state.events[action.transponder.eventID].transponders)
    
      const transponder = {
        number: action.transponder.number,
        rented: false,
        rented_by: action.transponder.rented_by
      }

      function updateObjectInArray(array, action) {
        return array.map((item, index) => {
          if (index !== action.transponder.number ) {
            // This isn't the item we care about - keep it as-is
            console.log("this is not the item you're looking for")
            return item
          } else {
            console.log("this is the item you're looking for")
            console.log(action.transponder.number - 1)
            return {
              number: 2, rented: true, rented_by: "",
              ...action.item
            }
          }
          
          // Otherwise, this is the one we want - return an updated value
          
        })
      }
      const updatedArray = updateObjectInArray(state.events[action.transponder.eventID].transponders, action)
      console.log(typeof updatedArray)
      
      
    return { ...state, 
      events: {
      ...state.events,
      [action.transponder.eventID]: 
        {
          ...state.events[action.transponder.eventID],
          transponders: updatedArray
          }}
        
      
    }

    return state
    default:
      return state;
  }
  
}

  
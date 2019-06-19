export default function manageRentals(
  state = {
    transponders: [{number: 1, rented: true, rented_by: "", event: "", date: ""},
    {number: 2, rented: false, rented_by: "", event: "", date: ""}],
    events: [{name: "USGP Round 1", date: "April 24th, 2019", location: "Austin, TX"},
    {name: "USGP Round 2", date: "June 26th, 2019", location: "Tooele, UT"}],
    loading: false
  },
  action
) {
  switch (action.type) {
    case 'ADD_EVENT':
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var dateString = action.payload.date; 
      var dateObject = new Date(dateString);

      const event = {
        name: action.payload.name,
        date: dateObject.toLocaleDateString("en-US", options),
        location: action.payload.location
      }
			return { ...state, events: [...state.events, event]}
    default:
      return state;
  }
  
      // return state;
  
}

  
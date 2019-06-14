export default function manageRentals(state = {
    todos: [],
  }, action) {
    console.log(action);
    switch (action.type) {
      case 'ADD_EVENT':
   
        const event = {
          id: Math.random()*10000000000000000,
          text: action.payload.text
        }
        return { events: state.todos.concat(event) };
   
    //   case 'DELETE_TODO':
   
    //   return {events: state.events.filter(todo => event.id !== action.payload)}
      default:
        return state;
    }
  }
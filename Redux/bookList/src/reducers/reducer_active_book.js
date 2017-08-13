// state argument is not application state, only the state this reducer
//  is responsible for

// reducers are in charge of changing the application state over time
// They do that through the use of action. Whenever an action is 
//  dispatced, they flows through all the different reducers
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
      return action.payload 
      // always return a fresh object
  }

  return state
}
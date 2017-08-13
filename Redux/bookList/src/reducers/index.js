import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// contains the reducers for our application. Here we have 2
const rootReducer = combineReducers({
  // BooksReducer is the function that returns the array of book titles (in reducer_books)
  // we then give it the key 'booksInState' in the rootReducer function
  booksInState: BooksReducer, // for each key we assign one reducer
  activeBookInState: ActiveBook
  // the reducers assigned to the 2 keys are responsible for producing
  //  the appropriate states
})

export default rootReducer

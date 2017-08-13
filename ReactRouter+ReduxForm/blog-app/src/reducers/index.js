import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
  // very critical to have the "form" state in the reducer. must be spelled "form"!
});

export default rootReducer;

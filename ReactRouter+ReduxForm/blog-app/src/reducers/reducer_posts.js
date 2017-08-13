import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {

  case FETCH_POST:
  // take all existing posts out of the state
  //  and put them into the newly returned obj

    // const post = action.payload.data
    // const newState = { ...state } 
    // newState[post.id] = post
    // return newState                    --> old es5 syntax

    return { ...state, [action.payload.data.id]: action.payload.data }
    // new es6 syntax for key interpolation

  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id')

  default:
    return state
  }
}
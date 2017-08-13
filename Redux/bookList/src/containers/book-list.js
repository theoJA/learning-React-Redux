import React, { Component } from 'react'

import { connect } from 'react-redux'

import { selectBook } from '../actions/index'
// importing the action creator function

import { bindActionCreators } from 'redux'


// we will be converting one of the Components to a container
// A container is a react container that has a direct connection
//  to the state managed by redux

// react-redux is a separate library that bridges the
//  two separate libraries, react and redux

// the container will help inject data from redux into the view in react


class BookList extends Component {
  renderList() {
    return this.props.booksInProps.map((book) => {
    // props comes from whatever is returned in mapStateToProps
    // we can access any property inside props, in this case the only property is 'booksInProps'
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBookInProps(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function right here is the glue between React and Redux!!
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    booksInProps: state.booksInState
    // booksInState is from ./reducers/index.js
    // since the state comes from the reducer, we access its property, 'booksInState' here
    //   and give it a key 'booksInProps' to be accessible throughout the class
  }
}

// Anything returned from this function will end up as props
//  on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  //  to all of our reducers
  return bindActionCreators({ selectBookInProps: selectBook }, dispatch)
}


// Promote BookList from a component to a container - it needs to know about
//  this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
// connect takes some "state-accessor" function and a component and produces a container
// in the above case, (mapStateToProps) = "state-accessor" function and (BookList) = component
// passing both in 'connect' creates a container
// The container is a component that is aware of the state contained by redux

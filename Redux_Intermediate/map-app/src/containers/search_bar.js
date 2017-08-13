import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

// #1 Create a class for the component
class SearchBar extends Component {

  constructor(props) {
    super(props)
    
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    // we need to bind 'this' to any callbacks to allow callbacks 
    //  to have access to the instance of the class
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }) 
    // before binding this, this won't be referring to the instance of the 
    //  SearchBar class
  }

  onFormSubmit(event) {
    event.preventDefault()
    // prevents page from refreshing when form is submitted
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} // callback with a this
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// #2 bind the action creator to the dispatch
// this gives any instance of the SearchBar class access to the function, fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// #3 map the dispatch props function to component to create a container
// "null" in 1st arg because this container doesn't care about the state contained 
//  in the app
export default connect(null, mapDispatchToProps)(SearchBar)
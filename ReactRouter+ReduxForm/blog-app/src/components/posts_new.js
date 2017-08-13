import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
  renderField(field) { 
    // the field arg contains an event handler or two that is responsible
    //  for ensuring the Field component is aware that it is responsible
    //  for dealing with the returned JSX

    const { meta: { touched, error } } = field
    // es6 destructuring
    // this is a nice way to simplify field.meta.touched or field.meta.error 

    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // field.input is an obj that contains a bunch
                           // of diff. event handlers and a bunch of diff
                           // props
          // ... is for making all the diff props in field.input to be 
          //  communicated as props for the input tag. just fancy JSX
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/') // this takes us back to the specified route
    })
  }

  render() {
    const { handleSubmit } = this.props // -> just a short form syntax
    // this is a property that has been passed on to the PostsNew component
    //  on behalf of redux-form

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title" //the prop, "label" can be given any name
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> {title: 'abc', categories: 'aaa', content: 'blabla'}
  const errors = {}

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!"
  }
  if (!values.content) {
    errors.content = "Enter some content!"
  }

  // IF errors is empty, the form is fine to submit
  // ELSE IF errors has *any* props, redux form assumes form is invalid
  return errors
}

export default reduxForm({
  validate, // this here is equivalent to validate: validate,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew) // this returns a component
)
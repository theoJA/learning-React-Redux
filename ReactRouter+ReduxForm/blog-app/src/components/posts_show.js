import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentDidMount() {
    // provided by react-router
    // params lists all the different wildcards that exist inside the url
    const { id } = this.props.match.params  
    this.props.fetchPost(id)
  }

  render() {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p> 
      </div>
    )
  }
}

// mapStateToProps - used to pick small pieces of states from the global state obj
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
  // really important technique to modularize the props in the component
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)


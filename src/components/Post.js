import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {

  handleClick = () =>{
   this.props.deletePost(this.props.match.params.post_id);
   this.props.history.push('/')
  }
  render() {
    const post  = this.props.post;
    const preparePost = post ? (
        <div className="post">
          <h4 className="center">{post.title}</h4>
          <p> {post.body}</p>
          <div className="center">
            <button className="button grey" onClick = {this.handleClick}> Delete Post </button>
          </div>
        </div> 
        ) 
      :
      (
        <div className="center">
           Post Deleted
        </div>
      );
  		
  		
    return (
      <div className="center">
       	<h1> {preparePost} </h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    post: state.posts.find(post => {
      return (post.id == ownProps.match.params.post_id);
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch({type: 'DELETE_POST', id: id})}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

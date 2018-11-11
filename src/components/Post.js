import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {

		state = {
			posts: {},
		}
	componentDidMount(){
		let id = this.props.match.params.post_id;
		axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
		.then(res => {
			this.setState({
				posts: res.data
			})	
		});
	}
  render() {
  	const post = this.state.posts ? 
  		(
  			<div className="post card">
  				<h4 className="center">{this.state.posts.title}</h4>
  				<p className="card-content"> {this.state.posts.body}</p>
  			</div> 
  		)
  		:
  		(
  			<div className="center"> Loading Posts </div>
  		);
    return (
      <div className="container">
       	<h1> {post} </h1>
      </div>
    );
  }
}

export default Post;

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PokeBall from '../pokeball.png';
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
  render() {
  	const {posts} = this.props;
  	const postList = posts.length ? 
  	( 
  		posts.map(post =>{
  		return(
  			<div className = "post card" key={post.id}>
  				<img src={PokeBall}/>
  				<div className = "card-content">
  				<span className="card-title"> 
  					<Link to = {'/posts/' + post.id}> {post.title} </Link> 
  				</span>
  				<p> {post.body} </p>
  				</div>
  			</div>
  			);
  		})
  	)
  	:
  	(
  		<div className="center"> No Posts Yet </div>
  	);

    return (
      <div className="container">
       	<h1 className="center"> Home </h1>
       	{postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps) (Home);

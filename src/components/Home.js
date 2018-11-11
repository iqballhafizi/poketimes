import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PokeBall from '../pokeball.png';
import './Home.css';
class home extends Component {
	constructor(props){
		super(props);
		this.state = {
			posts: [],
		}
	}
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res =>{
			this.setState({
				posts: res.data.slice(0,10)
			})
		})
	}
  render() {
  	const {posts} = this.state;
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

export default home;

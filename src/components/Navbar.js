import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
const Navbar = (props) => {
    return (
    <nav className="nav-wrapper red darken-3"> 
		<div className="container">
       		<a className="brand-logo"> Poke Times </a>
      	</div>
      	<ul className="right">
      		<li> <Link to="/"> Home </Link> </li>
      		<li> <Link to="/contact"> Contact </Link> </li>
      	</ul>
    </nav>
    );
}

export default withRouter(Navbar);

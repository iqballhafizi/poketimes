import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Post from './components/Post.js';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
         <Navbar />
         <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/contact' component={Contact} />
            <Route exact path = '/posts/:post_id' component={Post} />
          </Switch>
        </div>
        
    );
  }
}

export default App;

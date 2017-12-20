import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../components/home';
import About from '../components/about';
import Blog from '../components/blog';
import styles from './App.styles.js';

import { css } from 'aphrodite/no-important';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
         </nav>
           <Route path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/blog" component={Blog}/>
      </div>
    )
  }
}

export default App;

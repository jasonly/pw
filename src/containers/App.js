import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import About from '../components/about';
import Blog from '../components/blog';
import styles from './App.styles.js';

import { css } from 'aphrodite/no-important';

class App extends Component {
  render() {
    return (
      <div>

        <nav>
          <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
         </nav>

         <Route path="/about" component={About}/>
         <Route path="/blog" component={Blog}/>
      </div>
    )
  }
}

export default App;

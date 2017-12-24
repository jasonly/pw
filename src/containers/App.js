import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import About from '../components/about';
import Blog from '../components/blogContainer';
import styles from './App.styles.js';

import { css } from 'aphrodite/no-important';

class App extends Component {
  render() {
    return (
      <div>
        <nav className={css(styles.navContainer)}>
          <ul className={css(styles.navList)}>
            <li className={css(styles.navItem)}><Link to="/about">about</Link></li>
            <li className={css(styles.navItem)}><Link to="/blog">blog</Link></li>
          </ul>
         </nav>

         <Route path="/about" component={About}/>
         <Route path="/blog" component={Blog}/>
      </div>
    )
  }
}

export default App;

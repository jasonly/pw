import React from 'react';
import grid from '../styles/grid.styles.js';
import style from './blog.styles.js';

import { css } from 'aphrodite/no-important';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error('eh didnt work'));
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }

  render() {
    const posts = this.state.posts.map((item, i) => (
      <div>
        <div className={css(grid.col, style.post)}>
          <p>{ item.body }</p>
        </div>
      </div>
    ));

    return (
      <div>
        <section className={css(grid.row)}>
          <div>{ posts }</div>
        </section>
      </div>
    );
  }
}

export default Blog;

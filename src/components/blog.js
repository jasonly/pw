import React from 'react';
import grid from '../styles/grid.styles.js';
import style from './blog.styles.js';

import { css } from 'aphrodite/no-important';

const Blog = (postCollection) => {
  let posts;

  if (postCollection.posts.length > 1) {
    posts = postCollection.posts.map((item, i) => (
      <div key={i}>
        <div className={css(grid.col, style.post)}>
          <p>{ item.body }</p>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <section className={css(grid.row)}>
        <div>{ posts }</div>
      </section>
    </div>
  );
}

export default Blog;

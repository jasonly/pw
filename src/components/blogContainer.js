import React, { Component } from 'react';
import Blog from './blog';

class BlogContainer extends Component {
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
    fetch('test.json')
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
    return <Blog posts={this.state.posts} />;
  }
}

export default BlogContainer;

import React from 'react';
import ReactDOM from 'react-dom';
import Blog from '../blog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog />, div);
});

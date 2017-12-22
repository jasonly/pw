import { StyleSheet } from 'aphrodite/no-important';

const Style = StyleSheet.create({
  post: {
    border: '1px solid gray',
    backgroundColor: 'white',
    margin: '20px',
    boxShadow: '0px 0px white',
    padding: '20px',
    transition: 'all 500ms ease-in-out',

    ':hover': {
      border: '1px solid #60daaa',
      transition: 'all 500ms ease-in-out',
      boxShadow: '10px 10px #60daaa',
    },
  },
});

export default Style;

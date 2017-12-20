import { StyleSheet } from 'aphrodite/no-important';

const Grid = StyleSheet.create({
  row: {
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'block',
    }
  },
  col: {
    flex: '1',
  },
  rowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      display: 'block',
    }
  },
  colOne: {
    width: '100%',
  },
  colTwo: {
    width: '50%',
  },
  colThree: {
    width: '32%',
  },
  colFour: {
    width: '24%',
  },
});

export default Grid;

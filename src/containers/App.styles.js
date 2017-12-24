import { StyleSheet } from 'aphrodite/no-important';

const Styles = StyleSheet.create({
  navContainer: {
    height: '44px',
    padding: '0 20px',
    borderBottom: '1px solid black',
    position: 'sticky',
    top: '0',
    backgroundColor: 'white',
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    height: '44px',
  },
  navItem: {
    padding: '0 14px',
  }
});

export default Styles;

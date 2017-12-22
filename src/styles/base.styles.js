// this is sorta the only instance where I rewrite the global styles after the reset
import { StyleSheet } from 'aphrodite/no-important';

const bodyStyles = {
  margin: '0 auto',
  width: '980px',
};

const section = {
  marginTop: '20px',
  marginBottom: '20px',
}

const links = {
  textDecoration: 'none',
  backgroundSize: '0% 0%',
  transition: 'background-size 500ms',
  ':hover': {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #84fab0 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40%',
    backgroundPosition: '0 88%',
  }
}

const base = {
  globals: {
    '*body': { ...bodyStyles },
    '*section': { ...section },
    '*a': { ...links },
  },
};

const selectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== '*') {
    return null;
  }

  return generateSubtreeStyles(selector.slice(1));
};

const globalStyles = StyleSheet.extend([{ selectorHandler }]);
const styleSheet = globalStyles.StyleSheet.create(base);

export default globalStyles.css(styleSheet.globals);

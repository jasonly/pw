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

const base = {
  globals: {
    '*body': { ...bodyStyles },
    '*section': { ...section },
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

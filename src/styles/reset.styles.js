import { StyleSheet } from 'aphrodite/no-important';

const resetContainer = {
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
};

const resetElement = {
  display: 'block',
};

const resets = {
  globals: {
    '*html': resetContainer,
    '*body': {
      ...resetContainer,
      lineHeight: '1',
    },
    '*div': resetContainer,
    '*span': resetContainer,
    '*applet': resetContainer,
    '*object': resetContainer,
    '*iframe': resetContainer,
    '*h1': resetContainer,
    '*h2': resetContainer,
    '*h3': resetContainer,
    '*h4': resetContainer,
    '*h5': resetContainer,
    '*h6': resetContainer,
    '*p': resetContainer,
    '*pre': resetContainer,
    '*a': resetContainer,
    '*abbr': resetContainer,
    '*acronym': resetContainer,
    '*address': resetContainer,
    '*big': resetContainer,
    '*cite': resetContainer,
    '*code': resetContainer,
    '*del': resetContainer,
    '*dfn': resetContainer,
    '*em': resetContainer,
    '*img': resetContainer,
    '*ins': resetContainer,
    '*kbd': resetContainer,
    '*s': resetContainer,
    '*samp': resetContainer,
    '*small': resetContainer,
    '*strike': resetContainer,
    '*strong': resetContainer,
    '*sub': resetContainer,
    '*sup': resetContainer,
    '*tt': resetContainer,
    '*var': resetContainer,
    '*b': resetContainer,
    '*u': resetContainer,
    '*i': resetContainer,
    '*center': resetContainer,
    '*dl': resetContainer,
    '*dt': resetContainer,
    '*dd': resetContainer,
    '*ol': {
      ...resetContainer,
      listStyle: 'none',
    },
    '*ul': {
      ...resetContainer,
      listStyle: 'none',
    },
    '*li': resetContainer,
    '*fieldset': resetContainer,
    '*form': resetContainer,
    '*label': resetContainer,
    '*legend': resetContainer,
    '*table': {
      borderCollapse: 'collapse',
      borderSpacing: '0',
    },
    '*caption': resetContainer,
    '*tbody': resetContainer,
    '*tfoot': resetContainer,
    '*thead': resetContainer,
    '*tr': resetContainer,
    '*th': resetContainer,
    '*td': resetContainer,
    '*article': resetElement,
    '*aside': resetElement,
    '*canvas': resetContainer,
    '*details': resetElement,
    '*embed': resetContainer,
    '*figure': resetElement,
    '*figcaption': resetElement,
    '*footer': resetElement,
    '*header': resetElement,
    '*hgroup': resetElement,
    '*menu': resetElement,
    '*nav': resetElement,
    '*output': resetContainer,
    '*section': resetElement,
    '*summary': resetContainer,
    '*time': resetContainer,
    '*mark': resetContainer,
    '*audio': resetContainer,
    '*video': resetContainer,
  },
};

const selectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== '*') {
    return null;
  }

  return generateSubtreeStyles(selector.slice(1));
};

const globalStyles = StyleSheet.extend([{ selectorHandler }]);
const styleSheet = globalStyles.StyleSheet.create(resets);

export default globalStyles.css(styleSheet.globals);

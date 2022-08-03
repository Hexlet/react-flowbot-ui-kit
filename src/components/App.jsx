import React from 'react';
import { useInterpret } from '@xstate/react';
import PropTypes from 'prop-types';

import GlobalStateContext from '../context';
import BotBox from './BotBox';

const App = ({ botMachine, options }) => {
  const botService = useInterpret(botMachine);
  const { getWidget } = options;

  return (
    <GlobalStateContext.Provider value={{ botService, getWidget }}>
      <BotBox />
    </GlobalStateContext.Provider>
  );
};

App.propTypes = {
  botMachine: PropTypes.object, // eslint-disable-line
  options: PropTypes.shape({
    getWidget: PropTypes.func,
  }),
};

App.defaultProps = {
  botMachine: {},
  options: {},
};

export default App;

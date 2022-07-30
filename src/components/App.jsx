import React from 'react';
import { useInterpret } from '@xstate/react';
import PropTypes from 'prop-types';

import GlobalStateContext from '../context';
import BotBox from './BotBox';

const App = ({ botMachine, options }) => {
  const botService = useInterpret(botMachine);
  const { getWidgets } = options;

  return (
    <GlobalStateContext.Provider value={{ botService, getWidgets }}>
      <BotBox />
    </GlobalStateContext.Provider>
  );
};

App.propTypes = {
  botMachine: PropTypes.object, // eslint-disable-line
  options: PropTypes.shape({
    getWidgets: PropTypes.func,
  }),
};

App.defaultProps = {
  botMachine: {},
  options: {},
};

export default App;

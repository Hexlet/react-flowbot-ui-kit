import React from 'react';
import { useInterpret } from '@xstate/react';
import PropTypes from 'prop-types';

import GlobalStateContext from '../context/index';
import BotBox from './BotBox';

interface IApp {
  botMachine: any,
  options: {
    getWidget: () => any
  }
}

const App = ({ botMachine, options }: IApp) => {
  const botService = useInterpret(botMachine);
  const { getWidget } = options;

  return (
    <GlobalStateContext.Provider value={{ botService, getWidget }}>
      <BotBox />
    </GlobalStateContext.Provider>
  );
};

App.defaultProps = {
  botMachine: {},
  options: {},
};

export default App;

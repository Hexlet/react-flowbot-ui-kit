import React from 'react';
import { useInterpret } from '@xstate/react';
import PropTypes from 'prop-types';

import GlobalStateContext from '../context';
import BotBox from './BotBox';

const App = ({ botMachine }) => {
  const botService = useInterpret(botMachine);

  return (
    <GlobalStateContext.Provider value={{ botService }}>
      <BotBox />
    </GlobalStateContext.Provider>
  );
};

App.propTypes = {
  botMachine: PropTypes.object, // eslint-disable-line
};

export default App;

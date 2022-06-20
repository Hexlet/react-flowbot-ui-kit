import React from 'react';
import { useInterpret } from '@xstate/react';

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

export default App;

import React from 'react';
import { useInterpret } from '@xstate/react';

import GlobalStateContext from '../context/index';
import BotBox from './BotBox';

interface IAppProps {
  botMachine: any,
  options: {
    getWidget: () => any
  }
}

const App = ({ botMachine, options }: IAppProps): JSX.Element => {
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

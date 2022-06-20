import React from 'react';

import configurationExample from './examples/config';
import createBotMachine from './machine/flowbotMachine';
import App from './components/App';

export default (configuration = configurationExample) => {
  const botMachine = createBotMachine(configuration);

  return <App botMachine={botMachine} />;
};

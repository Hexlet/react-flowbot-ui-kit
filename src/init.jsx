import React from 'react';

import createBotMachine from './machine/flowbotMachine';
import App from './components/App';

const defaultOptions = {
  getWidget: () => null,
};

export default (configuration, userDefinedOptions = {}) => {
  const options = { ...defaultOptions, ...userDefinedOptions };
  const botMachine = createBotMachine(configuration);

  return <App botMachine={botMachine} options={options} />;
};

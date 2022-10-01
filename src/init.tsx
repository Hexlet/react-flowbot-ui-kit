import React from 'react';

import createBotMachine from '../machine/flowbotMachine';
import App from './App';
import { IConfig } from '../intefaces/IConfig';

const defaultOptions = {
  getWidget: () => null,
};

export default (configuration: IConfig, userDefinedOptions = {}): JSX.Element => {
  const options = { ...defaultOptions, ...userDefinedOptions };
  const botMachine = createBotMachine(configuration);

  return <App botMachine={botMachine} options={options} />;
};

import React from 'react';

import createBotMachine from './machine/flowbotMachine';
import App from './components/App';
import {IConfig} from "@/src/intefaces/IMachineState";

const defaultOptions = {
  getWidget: () => null,
};

export default (configuration: IConfig, userDefinedOptions = {}) => {
  const options = { ...defaultOptions, ...userDefinedOptions };
  const botMachine = createBotMachine(configuration);

  return <App botMachine={botMachine} options={options} />;
};

import React from 'react';
// @ts-ignore
import createBotMachine from './machine/flowbotMachine';
import App from './components/App';
import { IConfig } from './intefaces/IConfig';

const defaultOptions = {
  getWidget: () => null,
};

export default (configuration: IConfig, userDefinedOptions = {}): JSX.Element => {
  const options = { ...defaultOptions, ...userDefinedOptions };
  const botMachine = createBotMachine(configuration);

  return <App botMachine={botMachine} options={options} />;
};

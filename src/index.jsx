// @ts-check

import ReactDOM from 'react-dom';

import './styles/style.scss';
import createFlowBot from './init';
import configurationExample from './examples/config';
import getWidgets from './examples/widgets/index.js';

const run = () => {
  const flowbot = createFlowBot(configurationExample, { getWidgets });
  const root = document.getElementById('root');
  ReactDOM.render(flowbot, root);
};

run();

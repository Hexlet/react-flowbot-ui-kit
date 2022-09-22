// @ts-check

import ReactDOM from 'react-dom';

import './styles/style.scss';
import createFlowBot from './init';
import configurationExample from '../examples/config';
import getWidget from '../examples/widgets/index';

const run = (): void => {
  const flowbot = createFlowBot(configurationExample, { getWidget });
  const root = document.getElementById('root');
  ReactDOM.render(flowbot, root);
};

run();

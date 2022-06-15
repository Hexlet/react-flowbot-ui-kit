// @ts-check

import ReactDOM from 'react-dom';

import './styles/style.scss';
import createFlowBot from './init';

const run = () => {
  const flowbot = createFlowBot();
  const root = document.getElementById('root');
  ReactDOM.render(flowbot, root);
};

run();

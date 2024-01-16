import ReactDOM from 'react-dom'
import getWidget from './init.tsx';
import steps from './steps.ts';
import { Step } from './interfaces/Step.ts';

const run = (): void => {
  const widget = getWidget(steps as Step[]);
  const root = document.getElementById('root');
  ReactDOM.render(widget, root);
};

run();

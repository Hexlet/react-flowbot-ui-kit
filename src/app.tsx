import { createRoot} from 'react-dom/client'
import getWidget from './init.tsx';
import defaultSteps from './steps.ts';
import { Step } from './interfaces/Step.ts';
import './scss/styles.scss';

const run = (container = document.getElementById('root'), steps = defaultSteps): void => {

  const widget = getWidget(steps as Step[]);

  if (!container) {
    throw Error('Container element not found');
  }

  const root = createRoot(container);
  root.render(widget);

};

export default run;

import { createRoot} from 'react-dom/client'
import getWidget from './init.tsx';
import steps from './steps.ts';
import { Step } from './interfaces/Step.ts';

const run = (): void => {
  const widget = getWidget(steps as Step[]);
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(widget);
  } else {
    console.error('Root element not found');
  }
};

run();

import App from './Components/App';
import { Step } from './interfaces/Step';

const init = (steps: Step[]) => {
  return <App steps={[...steps]}/>;
};

export default init;

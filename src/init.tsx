import App from './App';
import { Step } from './interfaces/Step';

export default (steps: Step[]) => {
  return <App steps={[...steps]}/>;
};

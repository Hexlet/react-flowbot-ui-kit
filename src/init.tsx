import App from './App';
import { Step } from './interfaces/Step';
import './scss/styles.scss';



const init = (steps: Step[]) => {
  return <App steps={[...steps]}/>;
};

export default init;

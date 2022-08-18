import ABS from './ABS.jsx';
import ESP from './ESP.jsx';

const widgets = {
  ABS,
  ESP,
};

export default (name) => widgets[name];

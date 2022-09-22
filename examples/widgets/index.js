import ABS from './ABS.tsx';
import ESP from './ESP.tsx';

const widgets = {
  ABS,
  ESP,
};

export default (name) => widgets[name];

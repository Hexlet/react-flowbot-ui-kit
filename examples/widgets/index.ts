import ABS from './ABS';
import ESP from './ESP';

const widgets: any = {
  ABS,
  ESP,
};

export default (name: string) => widgets[name];

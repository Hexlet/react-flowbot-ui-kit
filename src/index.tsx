import React from 'react'
import ReactDOM from 'react-dom'
import getWidget from './init.tsx';


const run = (): void => {
  const Widget = getWidget();
  const root = document.getElementById('root');
  ReactDOM.render(Widget, root);
};

run();

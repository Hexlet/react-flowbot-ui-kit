import React, { useContext } from 'react';
import { useActor } from '@xstate/react';

import BotToggler from './BotToggler';
import MessageBox from './MessageBox';
import GlobalStateContext from '../context/index';
import TransitionButtons from './TransitionButtons';

const isBotActive = (botState: any): boolean => !botState.matches('idle');

const BotBox = () => {
  const globalServices: any = useContext(GlobalStateContext);
  const [state]: any = useActor(globalServices.botService);

  return (
    <>
      {isBotActive(state) && <MessageBox />}
      {isBotActive(state) && <TransitionButtons />}
      <BotToggler />
    </>
  );
};

export default BotBox;

import React, { useContext } from 'react';
import { useActor } from '@xstate/react';

import BotToggler from './BotToggler';
import MessageBox from './MessageBox';
import GlobalStateContext from '../context';

const isBotActive = (botState) => !botState.matches('idle');

const BotBox = () => {
  const globalServices = useContext(GlobalStateContext);
  const [state] = useActor(globalServices.botService);

  return (
    <>
      {isBotActive(state) && <MessageBox />}
      <BotToggler />
    </>
  );
};

export default BotBox;

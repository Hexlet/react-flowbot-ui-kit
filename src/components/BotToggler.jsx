import React, { useContext } from 'react';
import { useActor } from '@xstate/react';
import { Button } from 'react-bootstrap';

import GlobalStateContext from '../context';

const BotToggler = () => {
  const globalServices = useContext(GlobalStateContext);
  const [state, send] = useActor(globalServices.botService);

  return (
    <Button className="position-absolute flowbot-toggler" onClick={() => send('TOGGLE')}>
      {state.value === 'idle'
        ? 'Click to activate'
        : 'Active! Click to deactivate'}
    </Button>
  );
};

export default BotToggler;

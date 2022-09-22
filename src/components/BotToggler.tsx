import React, { useContext } from 'react';
import { useActor } from '@xstate/react';
import { Button } from 'react-bootstrap';

import GlobalStateContext from '../context/index';

// globalServices & state types ???
const BotToggler = (): JSX.Element => {
  const globalServices: any = useContext(GlobalStateContext);
  const [state, send]: any = useActor(globalServices.botService);

  return (
    <Button className="position-absolute flowbot-toggler" onClick={() => send('TOGGLE')}>
      {state.value === 'idle'
        ? 'Click to activate'
        : 'Active! Click to deactivate'}
    </Button>
  );
};

export default BotToggler;

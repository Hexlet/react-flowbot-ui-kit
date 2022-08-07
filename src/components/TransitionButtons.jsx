import React, { useContext } from 'react';
import { useActor } from '@xstate/react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import GlobalStateContext from '../context/index.js';

const TransitionButtons = () => {
  const { botService } = useContext(GlobalStateContext);
  const [, send] = useActor(botService);
  const backToPreviousQuestion = () => {
    send({
      type: 'PREVIOUS',
    });
  };

  const backToInitQuestions = () => {
    send({
      type: 'RESET',
    });
  };

  return (
    <div className="position-absolute flowbot-history-transition-buttons">
      <Button
        variant="secondary"
        className="me-2"
        onClick={backToPreviousQuestion}
        disabled={_.isEmpty(botService.state.context.questionsChain)}
      >
        Previous question
      </Button>
      <Button variant="danger" onClick={backToInitQuestions}>Return to start</Button>
    </div>
  );
};

export default TransitionButtons;

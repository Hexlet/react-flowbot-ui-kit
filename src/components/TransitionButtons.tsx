import React, {MouseEventHandler, useContext} from 'react';
import { useActor } from '@xstate/react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import GlobalStateContext from '../context/index';

//botService type ?
const TransitionButtons = (): JSX.Element => {
  const { botService }: any = useContext(GlobalStateContext);
  const [, send] = useActor(botService);

  const backToPreviousQuestion: MouseEventHandler = () => {
    send({
      type: 'PREVIOUS',
    });
  };

  const backToInitQuestions: MouseEventHandler = () => {
    send({
      type: 'RESET',
    });
  };

  return (
    <div className="position-absolute flowbot-history-transition-buttons">
      <Button
        variant="secondary"
        className="me-2"
        data-testid="prevQuestionBtn"
        onClick={backToPreviousQuestion}
        disabled={_.isEmpty(botService.state.context.questionsChain)}
      >
        Previous question
      </Button>
      <Button
        variant="danger"
        data-testid="resetBtn"
        onClick={backToInitQuestions}
      >
        Return to start
      </Button>
    </div>
  );
};

export default TransitionButtons;

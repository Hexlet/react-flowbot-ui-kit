import React, { useContext, useEffect } from 'react';
import { useActor } from '@xstate/react';
import { Container, Spinner } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';

import GlobalStateContext from '../context/index';
import QuestionButton from './QuestionButton';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import {IState, IMessage} from "@/src/intefaces/IStateMessage";

const isBotWaitingQuestion = (botState: any): boolean => botState.matches('waitingQuestion');

const messageMapping = (message: IMessage): JSX.Element | Error => {
  switch (message.type) {
    case 'user':
      return <UserMessage key={message.id} messageData={message} />;
    case 'bot':
      return <BotMessage key={message.id} messageData={message} />;
    default:
      throw Error(`unknown message type: ${message.type}`);
  }
};

const MessagesBox = (): JSX.Element => {
  const globalServices: any = useContext(GlobalStateContext);
  const [state]: IState | any = useActor(globalServices.botService);

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: 'containerElement',
      duration: 0,
    });
  });

  return (
    <Container data-testid="botContainer" id="containerElement" fluid="sm" className="position-absolute overflow-auto shadow p-3 mb-5 bg-body rounded flowbot-message-box">
      {state.context.messages.map((item: IMessage) => messageMapping(item))}
      <div className="d-flex flex-column">
        {isBotWaitingQuestion(state)
          ? state.context.currentQuestions.map(({ answerName, id, text }: any) => (
            <QuestionButton key={id} text={text} answerName={answerName} />
          ))
          : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
      </div>
    </Container>
  );
};

export default MessagesBox;

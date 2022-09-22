import React, {MouseEventHandler, useContext} from 'react';
import { Button } from 'react-bootstrap';
import { useActor } from '@xstate/react';

import GlobalStateContext from '../context/index';

interface IQuestionButton {
  text: string
  answerName: string
}

const QuestionButton = ({ text, answerName }: IQuestionButton): JSX.Element => {
  const globalServices: any = useContext(GlobalStateContext);
  const [, send] = useActor(globalServices.botService);

  const onClick: MouseEventHandler = () => {
    send({
      type: 'ASK',
      answerName,
      text,
    });
  };

  return <Button className="mb-2" onClick={onClick}>{text}</Button>;
};


export default QuestionButton;

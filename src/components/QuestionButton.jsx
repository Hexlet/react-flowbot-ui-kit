import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useActor } from '@xstate/react';

import GlobalStateContext from '../context';

const QuestionButton = ({ text, answerName }) => {
  const globalServices = useContext(GlobalStateContext);
  const [, send] = useActor(globalServices.botService);

  const onClick = () => {
    send({
      type: 'ASK',
      answerName,
      text,
    });
  };

  return <Button className="mb-2" onClick={onClick}>{text}</Button>;
};

export default QuestionButton;

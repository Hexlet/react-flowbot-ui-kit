import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface IUserMessage {
  messageData: {
    content?: string | undefined
  }
}

const UserMessage = ({ messageData }: IUserMessage): JSX.Element => (
  <Row>
    <Col className="text-end" md={{ span: 8, offset: 4 }}>{messageData.content}</Col>
  </Row>
);


UserMessage.defaultProps = {
  messageData: {
    content: '',
  },
};

export default UserMessage;

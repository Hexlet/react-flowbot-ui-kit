import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Widget from './Widget';

interface IBotMessage {
  messageData: {
    content?: string | undefined,
    widgetData: {
      id: string,
      name: string
    }[] | []
  }
}

const BotMessage = ({ messageData: { content, widgetData } }: IBotMessage): JSX.Element => (
  <>
    <Row>
      <Col md={8}>
        {content}
      </Col>
    </Row>
    {widgetData.map(({ name, id }) => <Widget key={id} name={name} />)}
  </>
);

BotMessage.defaultProps = {
  messageData: {
    content: '',
    widgetData: [],
  },
};

export default BotMessage;

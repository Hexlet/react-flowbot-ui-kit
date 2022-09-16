import React from 'react';
import { Row, Col } from 'react-bootstrap';

// @ts-ignore
import Widget from './Widget.jsx';

interface IBotMessage {
  messageData: {
    content: string,
    widgetData: {
      id: string,
      name: string
    }[]
  }
}

const BotMessage = ({ messageData: { content, widgetData } }: IBotMessage) => (
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

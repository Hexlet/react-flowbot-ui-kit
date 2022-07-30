import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Widget from './Widget.jsx';

const BotMessage = ({ messageData: { content, widgetData } }) => (
  <>
    <Row>
      <Col md={8}>
        {content}
      </Col>
    </Row>
    {widgetData.map(({ name, id }) => <Widget key={id} name={name} />)}
  </>
);

BotMessage.propTypes = {
  messageData: PropTypes.shape({
    content: PropTypes.string,
    widgetData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
  }),
};

BotMessage.defaultProps = {
  messageData: {
    content: '',
    widgetData: [],
  },
};

export default BotMessage;

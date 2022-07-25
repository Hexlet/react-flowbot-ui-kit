import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BotMessage = ({ messageData }) => (
  <Row>
    <Col md={8}>{messageData.content}</Col>
  </Row>
);

BotMessage.propTypes = {
  messageData: PropTypes.shape({
    content: PropTypes.string,
  }),
};

BotMessage.defaultProps = {
  messageData: {
    content: '',
  },
};

export default BotMessage;

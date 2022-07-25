import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserMessage = ({ messageData }) => (
  <Row>
    <Col className="text-end" md={{ span: 8, offset: 4 }}>{messageData.content}</Col>
  </Row>
);

UserMessage.propTypes = {
  messageData: PropTypes.shape({
    content: PropTypes.string,
  }),
};

UserMessage.defaultProps = {
  messageData: {
    content: '',
  },
};

export default UserMessage;

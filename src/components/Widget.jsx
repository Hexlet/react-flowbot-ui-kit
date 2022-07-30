import React, { useContext } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import GlobalStateContext from '../context';

const Widget = ({ name }) => {
  const { getWidgets } = useContext(GlobalStateContext);
  const Component = getWidgets(name);

  return (
    <Row className="mb-2" data-testid="widget">
      <Col md={8}>
        <Card style={{ width: '300px' }}>
          <Card.Body className="overflow-hidden">
            <Component />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

Widget.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Widget;

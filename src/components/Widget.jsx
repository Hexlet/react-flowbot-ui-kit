import React, {FC, useContext} from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// @ts-ignore
import GlobalStateContext from '../context/index.ts';
import PropTypes from 'prop-types';

const Widget = ({ name }) => {
  const { getWidget } = useContext(GlobalStateContext);
  const Component = getWidget(name);

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
  name: PropTypes.string.isRequired
}
export default Widget;

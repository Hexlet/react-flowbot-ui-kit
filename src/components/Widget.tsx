import React, {FC, useContext} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// @ts-ignore
import GlobalStateContext from '../context/index.ts';

interface IWidget {
  name: string
}

// getWidget type unknown
const Widget = ({ name }: IWidget): JSX.Element => {
  const { getWidget }: any = useContext(GlobalStateContext);
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

export default Widget;

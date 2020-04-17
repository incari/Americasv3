import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const WeightForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [widht, setWidht] = useState('');
  const [depth, setDepth] = useState('');

  return (
    <>
      <Form>
        <Form.Group>
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                value={weight}
                onChange={e => setWeight(e.target.value)}
                type='number'
                required
                placeholder='Weight in kilograms'
              ></Form.Control>
              <Form.Label>Height</Form.Label>
              <Form.Control
                type='number'
                value={height}
                onChange={e => setHeight(e.target.value)}
                required
                placeholder='Height in centrimets'
              ></Form.Control>
            </Col>
            <Col md={5}>
              <Form.Label>Widht</Form.Label>
              <Form.Control
                type='number'
                value={widht}
                onChange={e => setWidht(e.target.value)}
                placeholder='Widht in centrimets'
                required
              ></Form.Control>
              <Form.Label>Depth</Form.Label>
              <Form.Control
                type='number'
                value={depth}
                onChange={e => setDepth(e.target.value)}
                placeholder='Depth in centrimets'
                required
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default WeightForm;

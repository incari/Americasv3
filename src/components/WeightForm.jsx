import React from 'react';
import { InputGroup, FormGroup, Row, Col, Form } from 'react-bootstrap';

const WeightForm = () => (
  <>
    <Form>
      <Form.Group>
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <Form.Label>Weight</Form.Label>
            <Form.Control type='number'></Form.Control>
            <Form.Label>Height</Form.Label>
            <Form.Control type='number'></Form.Control>
          </Col>
          <Col md={5}>
            <Form.Label>Widht</Form.Label>
            <Form.Control type='number'></Form.Control>
            <Form.Label>Depth</Form.Label>
            <Form.Control type='number'></Form.Control>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  </>
);

export default WeightForm;

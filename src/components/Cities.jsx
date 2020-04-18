import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import WeightForm from './WeightForm';
import styled from 'styled-components';

const Styled = styled.div`
  button {
    background-color: #408abc;
  }
`;

const Cities = props => {
  //const { departure, arrival } = props;
  return (
    <>
      <Styled>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Form.Group>
              <Form.Label>Departure</Form.Label>
              <Form.Control as='select'>
                <option>1</option>
              </Form.Control>{' '}
              <Form.Label>Arrival</Form.Label>
              <Form.Control as='select'>
                <option>1</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <WeightForm />
          </Col>
        </Row>
        <Row md={5} className='justify-content-md-center'>
          <Button size='lg'>Get Quotes</Button>
        </Row>
      </Styled>
    </>
  );
};

export default Cities;

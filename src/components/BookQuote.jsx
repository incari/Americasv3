import React from 'react';
import styled from 'styled-components';
import { Container, Form, Row, Button } from 'react-bootstrap';

const americasColor = '#408abc';
const Styled = styled.div`
  .container {
    padding: 0px;
  }
  .services-title {
    background-color: #408abc;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    margin-bottom: 10px;
    text-align: center;
  }
  button {
    background-color: #408abc;
  }
`;
const BookQuote = () => {
  return (
    <Styled>
      <Container className='text-justify'>
        <Form>
          <Row>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className='justify-content-lg-center'>
            <Button variant='primary' size='lg' block>
              Get Quotes
            </Button>
          </Row>
        </Form>
      </Container>
    </Styled>
  );
};

export default BookQuote;

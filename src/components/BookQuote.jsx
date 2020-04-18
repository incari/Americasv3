import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap';

const americasColor = '#408abc';
const Styled = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border: solid 1px #408abc;
  border-radius: 25px;

  button {
    background-color: #408abc;
    padding: 0px;
    width: 80%;
    border-radius: 25px;
  }
  p {
    margin-bottom: 5px;
  }
  a {
    color: #408abc;
    margin-top: 5px;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  h3 {
    margin: 0;
  }
  .row {
    justify-content: center;
  }
  .services-title {
    background-color: #408abc;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    margin-bottom: 10px;
    text-align: center;
  }
  .book-email {
    justify-content: right;
    margin: 15px;
  }
`;
const BookQuote = () => {
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('356');

  const handleSubmit = event => {
    alert(`${email} => ${price}`);
    event.preventDefault();
  };

  return (
    <>
      <Styled>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col}>
            <Row className='book-email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email.value}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                This quote is only valid for the next 48 hours
              </Form.Text>
            </Row>
            <Row>
              <Button type='submit' size='lg'>
                <h3>$ {price}</h3>
                <p>Book Now</p>
              </Button>
            </Row>
            <Row>
              <Link to='/contact'> More info ➡ ️</Link>
            </Row>
          </Form.Group>
        </Form>
      </Styled>
    </>
  );
};

export default BookQuote;

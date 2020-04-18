import React from 'react';
import Services from './Services';
import { Row, Col } from 'react-bootstrap';
import BookQuote from './BookQuote';
import Shipping from './Shipping';

const Quotation = () => {
  return (
    <>
      <Row className='align-items-center'>
        <Col md={{ span: 3, offset: 1 }}>
          <Services />
        </Col>
        <Col md={4}>
          <Shipping />
        </Col>
        <Col md={{ span: 3 }}>
          <BookQuote />
        </Col>
      </Row>
    </>
  );
};

export default Quotation;

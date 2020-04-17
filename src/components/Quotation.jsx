import React from 'react';
import Services from './Services';
import { Row, Col } from 'react-bootstrap';
import BookQuote from './BookQuote';

const Quotation = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <Services />
        </Col>
        <Col></Col>
        <Col>
          <BookQuote />
        </Col>
      </Row>
    </>
  );
};

export default Quotation;

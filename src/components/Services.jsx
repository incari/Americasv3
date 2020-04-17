import React from 'react';
import { InputGroup, Container, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';

const americasColor = '#408abc';
const Styled = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border: solid 1px #408abc;
  border-radius: 25px;
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
  h3 {
    color: white;
  }
  .services-checkbox {
    padding-left: 20px;
  }
`;
const Services = () => {
  const services = [
    { name: '🛩 Air freight', color: americasColor },
    { name: '📡 Airport of discharge', color: americasColor },
    { name: '🚚 Delivery', color: 'green' },
    { name: '📝 Insurance', color: americasColor },
    { name: '🚚 PickUp', color: 'red' },
    { name: '📡 Airport of origin', color: 'red' }
  ];
  return (
    <>
      <Styled>
        <Container className='text-justify'>
          <Form>
            <div className='services-title'>
              <h3> Included services </h3>
            </div>
            {services.map(service => (
              <div
                key={`custom-${service.name}`}
                className='mb-3 services-checkbox'
              >
                <Form.Check type='checkbox' id={`label`}>
                  <Form.Check.Input type='checkbox' />
                  <Form.Check.Label style={{ color: service.color }}>
                    {`${service.name}`}
                  </Form.Check.Label>
                </Form.Check>
              </div>
            ))}
          </Form>
        </Container>
      </Styled>
    </>
  );
};

export default Services;

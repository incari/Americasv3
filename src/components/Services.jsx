import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { FaPlaneDeparture, FaTruck } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdLocalAirport } from 'react-icons/md';

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
  const [checkbox, setCheckbox] = useState('');

  const handleChange = event => {
    setCheckbox(alert(event.target.name));
  };

  const services = [
    { name: ` Air freight`, color: americasColor, icon: FaPlaneDeparture },
    {
      name: ' Airport of discharge',
      color: americasColor,
      icon: MdLocalAirport
    },
    { name: ' Delivery', color: 'green', icon: FaTruck },
    { name: ' Insurance', color: americasColor, icon: IoIosPaper },
    { name: ' PickUp', color: 'red', icon: FaTruck },
    { name: ' Airport of origin', color: 'red', icon: MdLocalAirport }
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
                <Form.Check type='checkbox'>
                  <Form.Check.Input
                    name={service.name}
                    type='checkbox'
                    value={checkbox}
                    onChange={handleChange}
                  />
                  <Form.Check.Label style={{ color: service.color }}>
                    <span>{React.createElement(service.icon)}</span>
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

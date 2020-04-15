import React, { useState } from 'react';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/Americas-logo.png';

const Styles = styled.div`
  .nav {
    ${'' /* height: 200px; */}
    background-color: #408abc;
    padding: 10px;
  }
  ,
  .nav .h3 {
    color: white;
  }
  a,
  p,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    margin: 10px;
    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`;
export const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    alert(`${name} ; ${email}`);
  };

  return (
    <Styles>
      <Nav
        defaultActiveKey='/'
        className='container-fluid justify-content-center'
      >
        <Form onSubmit={handleSubmit}>
          <h3>Register to our events</h3>
          <Row>
            <Col>
              <Form.Control
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Name'
                name='name'
                required
              />
            </Col>
            <Col>
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
                type='email'
                name='email'
              />
            </Col>
            <Col>
              <Button variant='dark' name='button-form' type='submit'>
                Register
              </Button>
            </Col>
          </Row>
        </Form>

        <Form.Row>
          <Navbar.Brand>
            <Link to='/'>
              <Image src={logo} alt='Americas-Alliance-network-logo'></Image>
            </Link>
          </Navbar.Brand>
        </Form.Row>

        <Form.Row className='col-12 justify-content-center'>
          <p>Copyright © 2020 | Americas Alliance</p>
          <Link to='/'> Home </Link>
          <Link to='/Terms'>Terms of use</Link>
          <Link to='/Policy'>Privacy policy</Link>
          <Link to='/help'>Help</Link>
        </Form.Row>
      </Nav>
    </Styles>
  );
};

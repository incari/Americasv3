import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Americas-logo.png';

const Styles = styled.div`
  .navbar {
    background-color: #408abc;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;
    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`;

const Header = () => (
  <Styles>
    <Navbar expand='lg'>
      <a to='/'>
        <Navbar.Brand>
          <img src={logo} alt='Americas-Alliance-network-logo'></img>
        </Navbar.Brand>
      </a>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link>
              <a to='/'>Home</a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a to='/about'>About</a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a to='/contact'>Contact</a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a to='/Admin'>Admin</a>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Header;

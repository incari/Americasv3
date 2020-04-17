import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import styled from 'styled-components';
const Style = styled.div`
  .jumbotron {
    color: #408abc;
    height: 200px;
    text-align: center;
  }
  p {
    color: black;
  }
`;

const Banner = () => {
  return (
    <Style>
      <Jumbotron fluid>
        <Container>
          <h1>Americas Alliance - Shipping Calculator</h1>
          <p> The new way to get air freight fares...</p>
        </Container>
      </Jumbotron>
    </Style>
  );
};

export default Banner;

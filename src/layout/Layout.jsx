import React from 'react';
import { Container } from 'react-bootstrap';

import styled from 'styled-components';

const Styles = styled.div`
  min-height: calc(100vh - 300px);
  overflow: hidden;
  display: block;
  position: relative;
`;

export const Layout = props => (
  <Styles id='reasdasd'>
    <Container>{props.children}</Container>
  </Styles>
);

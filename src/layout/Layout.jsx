import React from 'react';
import { Container } from 'react-bootstrap';

//import styled from 'styled-components';

// const Styles = styled.div`
//   min-height: calc(100vh - 250px);
//   overflow: hidden;
//   display: block;
//   position: relative;
//   padding: 0px;
// `;

export const Layout = props => <Container fluid>{props.children}</Container>;

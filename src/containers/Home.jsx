import React from 'react';
import Banner from '../components/Banner';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import Cities from '../components/Cities';
import Quotation from '../components/Quotation';

const Style = styled.div``;
const departure = ['Departure1', 'Departure2'];
const arrival = ['Arival1', 'Arival2'];
const Home = () => {
  return (
    <Style>
      <Banner></Banner>
      <Cities></Cities>
      <Quotation />
    </Style>
  );
};

export default Home;

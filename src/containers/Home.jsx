import React from 'react';
import Banner from '../components/Banner';

import styled from 'styled-components';
import Cities from '../components/Cities';

const Style = styled.div`
  padding: 0px;
`;
const departure = ['Departure1', 'Departure2'];
const arrival = ['Arival1', 'Arival2'];
const Home = () => {
  return (
    <Style>
      <Banner></Banner>
      <Cities></Cities>
    </Style>
  );
};

export default Home;

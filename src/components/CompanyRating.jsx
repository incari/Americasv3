import React from 'react';
import logo from '../assets/skycargo.png';
import styled from 'styled-components';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';
import { Row, Col, Image } from 'react-bootstrap';
const Styled = styled.div`
  img {
    width: 180px;
  }
  h3 {
    color: #408abc;
  }
  .rating {
    color: #408abc;
    size: 50px;
  }
`;
const company = { name: 'Sky Cargo', logo: { logo }, rating: 4.8 };

const Rating = company.rating;

const CompanyRating = () => {
  return (
    <Styled>
      <Row>
        <Col>
          <h3>{company.name}</h3>
        </Col>
      </Row>
      <Row className='align-items-center'>
        <Col>
          <Image src={company.logo.logo} alt={company.name}></Image>
        </Col>
        <Col>
          <div className='rating'>
            <MdStar size={32} />
            <MdStar size={32} />
            <MdStar size={32} />
            <MdStar size={32} />
            <MdStarHalf size={32} />
          </div>
        </Col>
      </Row>
    </Styled>
  );
};

export default CompanyRating;

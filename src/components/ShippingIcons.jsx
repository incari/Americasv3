import React, { useState } from 'react';
import styled from 'styled-components';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

//import { PathLine } from 'react-svg-pathline';
import { Row, Col } from 'react-bootstrap';

const Styled = styled.div`
  svg {
    width: 100%;
    height: 10px;
  }
  .radio-start {
    padding: 100px;
    position: absolute;
  }
  .radio-mid-1 {
  }
  .radio-mid-2 {
  }
  .radio-end {
  }
`;
const ShippingIcons = () => {
  const [line1, setLine1] = useState('');
  const color = ['red', 'blue', 'gree', 'gray'];

  const handleClick = event => {
    event.stroke = 'red';
  };
  return (
    <>
      <Styled>
        <svg>
          <polyline
            points='30,0 165,0'
            stroke={color[1]}
            strokeWidth='7'
            onClick={handleClick}
            fill='none'
          />

          <polyline
            points='165,0 300,0'
            stroke='red'
            strokeWidth='7'
            fill='none'
          />

          <polyline
            points='300,0 435,0'
            stroke='green'
            strokeWidth='7'
            fill='none'
          />
        </svg>
      </Styled>
    </>
  );
};

export default ShippingIcons;

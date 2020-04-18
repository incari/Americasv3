import React from 'react';
import { FaBeer, FaPlaneDeparture } from 'react-icons/fa';

class ReactIcons extends React.Component {
  render() {
    return (
      <h3>
        {' '}
        Lets go for a <FaBeer />? <FaPlaneDeparture />
      </h3>
    );
  }
}
export default ReactIcons;

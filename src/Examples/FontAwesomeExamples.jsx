import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon='check-square' />
    Favorite beverage: <FontAwesomeIcon icon='coffee' />
  </div>
);

export const Gadget = () => (
  <div>
    <FontAwesomeIcon icon='check-square' />
    Popular gadgets come from vendors like:
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
  </div>
);

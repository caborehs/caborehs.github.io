import React from 'react';
import styled from 'styled-components';
import { breakpoint } from './settings';

const BrandStyle = styled.img`
  height: 30px;
  display: block;
  margin-top: 2px;

  @media screen and (max-width: ${breakpoint}px) {
    
  }
`;

const Brand = props => (
  <BrandStyle src={process.env.PUBLIC_URL + '/brand.png'} />
);

export default Brand;
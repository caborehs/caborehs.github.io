import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 250px;
  margin: 20px 0 30px 0;
`;

const Logo = (props) => (
  <LogoImg src={process.env.PUBLIC_URL + '/logo.png'} alt=""/>
);

export default Logo;
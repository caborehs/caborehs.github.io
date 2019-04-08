import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoint, textColor } from './settings';

export const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  
  li {
    margin: 0 8px;
    padding: 0;
    display: block;
    float: left;
  }
  
  @media screen and (max-width: ${breakpoint}px) {
    width: 100%;
    display: ${props => props.active ? 'block' : 'none'};
    margin-top: 10px;
    padding: 0px;
    background-color: #111;
    
    li {
      float: none;
      margin: 0;
    }
  }
`;

export const Item = styled(NavLink)`
  display: block;
  padding: 0px 10px;
  color: ${textColor};
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: none;
    background-color: transparent;
    color: white;
  }

  @media screen and (max-width: ${breakpoint}px) {
    font-size: 24px;
    padding: 10px 10px;
  }
`;
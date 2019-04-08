import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { breakpoint } from './settings';

export const MenuIcon = styled(FaBars)`
  width: 30px;
  height: 30px;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, .5)'};
  display: none;
  margin: 0px;
  cursor: pointer;

  @media screen and (max-width: ${breakpoint}px) {
    display: block;
  }
`;
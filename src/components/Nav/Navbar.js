import React, { Component } from 'react';
import styled from 'styled-components';
import { Item, Items } from './Items';
import { MenuIcon } from './Icons';
import Brand from './Brand';
import Container from '../common/Container';
import { breakpoint, bgColor, height } from './settings';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${bgColor};
  border-bottom: 1px solid #222;
  padding: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  
  @media screen and (max-width: ${breakpoint}px) {
    flex-direction: column;
  }
  `;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px;
  height: ${height}px;
  
  @media screen and (max-width: ${breakpoint}px) {
    width: calc(100% - 30px);
    margin: 0px;
  }
`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      active: false
    }
  }

  toggleMenu = () => {
    this.setState({ active: !this.state.active });
  }  

  render() {
    return (
      <Wrapper>
        <Container>
          <Nav>
            <Top>
              <Brand />
              <MenuIcon onClick={this.toggleMenu} active={this.state.active} />
            </Top>
            <Items onClick={this.toggleMenu} active={this.state.active}>
              <li><Item to='/'>home</Item></li>
              <li><Item to='/quem-somos'>quem somos</Item></li>
              <li><Item to='/membros'>membros</Item></li>
              <li><Item as='a' href='https://forum.caborehs.org/'>fórum</Item></li>
              <li><Item to='/contato'>contato</Item></li>
            </Items>
          </Nav>
        </Container>
      </Wrapper>
    );
  }
}
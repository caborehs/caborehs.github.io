import styled from 'styled-components';

const sizes = {
  base: 16,
  small: 14,
  medium: 14,
  large: 28,
}

const Button = styled.button`
  display: block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: ${props => props.size ? sizes[props.size] : sizes['base']}px;
  margin: 20px auto;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

export default Button;
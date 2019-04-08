import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: ${props => props.bg && props.bg};
  display: ${props => props.flex ? 'flex' : 'block'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export default Section;
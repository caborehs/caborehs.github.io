import styled from 'styled-components';

const Container = styled.section`
  width: auto;
  max-width: 940px;
  border: 0px solid #fff;
  margin: 0 auto;

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default Container;
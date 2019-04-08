import styled from 'styled-components';

export const Title = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 20px;
`;

export const PageTitle = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  line-height: 2;
  font-size: 24px;
`;

export const Text = styled.p`
  display: block;
  width: ${props => props.width ? props.width + 'px' : 'auto'};
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 20px;

  p {
    text-align: ${props => props.align ? props.align : 'left'};
  }
`;

export const P = styled.p`
  display: block;
  margin: 0 0 1em 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
`;


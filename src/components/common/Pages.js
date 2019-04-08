import React from 'react';
import styled from 'styled-components';
import Container from './Container';

export const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
`;

export const PageHeaderStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: #111;
`;

export const PageTitle = styled.h1`
  margin: 0;
  padding: 20px;
  font-size: 32px;
`;

export const PageContainer = styled(Container)`
  padding: 20px;
`;

export const PageHeader = props => (
  <PageHeaderStyle>
    <Container>
      <PageTitle>{props.text}</PageTitle>
    </Container>
  </PageHeaderStyle>
);
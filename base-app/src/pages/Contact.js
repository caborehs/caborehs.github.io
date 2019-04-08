import React from 'react';
import { Text, P } from '../components/common/Typography';
import { PageWrapper, PageHeader, PageContainer } from '../components/common/Pages';

const Members = props => (
  <PageWrapper>
    <PageHeader text="$ ./contato" />
    <PageContainer>
      <Text>
        <P>Lorem ipsum dolor sit amet</P>
      </Text>
    </PageContainer>
  </PageWrapper>
);

export default Members;

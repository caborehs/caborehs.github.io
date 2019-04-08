import React from 'react';
import Section from '../components/common/Section';
import { Text } from '../components/common/Typography';
import { PageHeader, PageWrapper, PageContainer } from '../components/common/Pages';

const Projects = props => (
  <Section display="flex" bg="black">
    <PageWrapper>
    <PageHeader text="$ ./quem-somos" />
    <PageContainer>
      <Text align="justify">
        Projetos
      </Text>
    </PageContainer>
  </PageWrapper>
  </Section>
);

export default Projects;

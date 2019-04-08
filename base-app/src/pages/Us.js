import React from 'react';
import { Text, P } from '../components/common/Typography';
import { PageHeader, PageWrapper, PageContainer } from '../components/common/Pages';

const Us = props => (
  <PageWrapper>
    <PageHeader text="$ ./quem-somos" />
    <PageContainer>
      <Text align="justify">
        <P>O Caboré Hacker Space (CHS) é um veículo de fomento a cultura “mão-na-massa” cientificamente e tecnologicamente falando. É um local para pôr em prática ideias. Um espaço para a criatividade. Um mecanismo colaborativo.</P>
        <P>Criado por uma iniciativa de jovens caraubenses entusiastas de ciência e tecnologia, para servir a sociedade como um vetor para o desenvolvimento local a partir da implementação de ideias, dando as pessoas suporte e material para que estas saiam do papel e passem a prática.</P>
        <P>O CHS é gerido por voluntários, onde estes são também seus usuários e colaboradores, e têm satisfação em fornecer o espaço, material e compartilhar os seus conhecimentos para que outras pessoas possam aprender, criar e explorar, em um ambiente agradável e acessível.</P>
        <P>Não é necessário pagar nada para utilizar o CHS. Gentileza gera gentileza. Compartilhar o que aprende com os outros cria um ecossistema propício para a inovação, unindo-se forças para a implementação de novas ideias. </P>
        <P>Seja excelente! Especialmente com os seus companheiros de hackerspace. Esta é a regra.</P>
      </Text>
    </PageContainer>
  </PageWrapper>
);

export default Us;

import React from 'react';
import Logo from '../components/Logo';
import { Text, P } from '../components/common/Typography';
import Button from '../components/common/Buttons';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import SocialNetworks from '../components/SocialNetworks';

const Home = props => (
  <div>
    <Section flex>
      <Logo />
      <Container>
        <Text align="center" width="700">
          <P>O Caboré Hackerspace (CHS) tem como objetivo viabilizar um espaço comunitário colaborativo e aberto para que entusiastas de tecnologia possam desenvolver atividades e projetos nas mais diversas áreas.</P>
          <Button size="large" as="a" href="https://picpay.me/caborehs">Contribua</Button>
        </Text>
        <SocialNetworks />
      </Container>
    </Section>
  </div>
);

export default Home;

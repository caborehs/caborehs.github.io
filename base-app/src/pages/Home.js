import React from 'react';
import Logo from '../components/Logo';
import { Text, P } from '../components/common/Typography';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import SocialNetworks from '../components/SocialNetworks';

const Home = props => (
  <div>
    <Section flex>
      <Logo />
      <Container>
        <Text align="center" width="700">
          <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, aspernatur. Laboriosam, eveniet iste.</P>
          <P>Aspernatur libero reiciendis earum odit ipsam repudiandae laborum, porro incidunt consequuntur ex dolorem, velit quam repellendus veniam, eveniet sint ea. Accusamus, cum!</P>
        </Text>
        <SocialNetworks />
      </Container>
    </Section>
  </div>
);

export default Home;

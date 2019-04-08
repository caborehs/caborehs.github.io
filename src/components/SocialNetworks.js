import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaWikipediaW, FaTwitter } from 'react-icons/fa';

const SocialNetworksStyle = styled.div`
  text-align: center;
`;

const SocialLink = styled(NavLink)`
  color: rgba(255, 255, 255, .6);
  text-decoration: none;
  font-size: 32px;
  margin: 10px;

  &:hover {
    color: white;
  }

  &:active,
  &:visited,
  &:focus {
    color: rgba(255, 255, 255, .6);
  }
`;

const SocialNetworks = (props) => (
  <SocialNetworksStyle>

    {/* <SocialLink as="a" href="http://facebook.com">
      <FaFacebook />
    </SocialLink> */}
    
    <SocialLink as="a" href="https://instagram.com/caborehs">
      <FaInstagram />
    </SocialLink>
    
    <SocialLink as="a" href="https://twitter.com/caborehs">
      <FaTwitter />
    </SocialLink>

    {/* <SocialLink as="a" href="http://facebook.com">
      <FaTelegram />
    </SocialLink> */}

    <SocialLink as="a" href="https://github.com/caborehs">
      <FaGithub />
    </SocialLink>

    <SocialLink as="a" href="https://wiki.caborehs.org">
      <FaWikipediaW />
    </SocialLink>

  </SocialNetworksStyle>
);

export default SocialNetworks;
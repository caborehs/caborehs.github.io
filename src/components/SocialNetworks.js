import React from 'react';
import styled, { css } from 'styled-components';
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaWikipediaW } from 'react-icons/fa';

const IconStyle = css`
  font-size: 32px;
  margin: 10px;
`;

const SocialNetworksStyle = styled.div`
  text-align: center;
`;

const FbIcon = styled(FaFacebook)`${IconStyle}`;
const IgIcon = styled(FaInstagram)`${IconStyle}`;
const TgIcon = styled(FaTelegram)`${IconStyle}`;
const GitIcon = styled(FaGithub)`${IconStyle}`;
const WikiIcon = styled(FaWikipediaW)`${IconStyle}`;

const SocialNetworks = (props) => (
  <SocialNetworksStyle>
    <FbIcon/>
    <IgIcon/>
    <TgIcon/>
    <GitIcon/>
    <WikiIcon/>
  </SocialNetworksStyle>
);

export default SocialNetworks;
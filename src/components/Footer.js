import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #e8e0cd;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Anime Figurine Shop. XaviDigi.</p>
    </FooterWrapper>
  );
};

export default Footer;

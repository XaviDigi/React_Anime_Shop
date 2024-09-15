import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2023 Anime Figurine Shop. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;

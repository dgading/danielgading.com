import React from 'react';
import StyledFooter from './StyledFooter';

const Footer = () => (
  <StyledFooter>
    ©
    {new Date().getFullYear()}
    , Built with,
    {' '}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);

export default Footer;

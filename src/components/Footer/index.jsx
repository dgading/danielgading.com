import React from 'react';
import StyledFooter from './StyledFooter';

const Footer = () => (
  <StyledFooter className="site-footer">
    <div className="site-info">
      © Daniel Gading
      <span className="copyright-date">
        {new Date().getFullYear()}
      </span>
    </div>
  </StyledFooter>
);

export default Footer;

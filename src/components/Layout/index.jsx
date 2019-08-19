import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../themes/GlobalStyles';
import { beachOutrun } from '../../themes/colorPalettes';
import { rhythm, scale } from '../../utils/typography';

import GridContainer from './GridContainer';
import Footer from '../Footer';

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;
  const rootPath = '/';
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={beachOutrun}>
        <GridContainer>
          <header className="site-header">{header}</header>
          <nav className="main-navigation">sup</nav>
          <main className="site-content">{children}</main>
          <Footer />
        </GridContainer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;

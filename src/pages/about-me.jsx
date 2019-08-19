import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';

const AboutMe = ({ location }) => {
  const data = useStaticQuery(graphql`
    query Blah {
      site {
        siteMetadata {
          author
          title
          social {
            site
            url
          }
        }
      }
    }
  `);
  const { author, social, title } = data.site.siteMetadata;

  return (
    <Layout location={location} title={title}>
      <h1>
        Hi my name is
        {' '}
        {author}
      </h1>
      {social.map((site) => (
        <li>
          <a href={site.url}>{site.site}</a>
        </li>
      ))}
    </Layout>
  );
};

AboutMe.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AboutMe;

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import Theme from '../../config/theme';
import { Link } from 'gatsby'
import GenericSectionTitle from '../components/shared/GenericSectionTitle';

const Box = styled.div`
  background-color: ${Theme.colors.primary.lighter};
  padding: 3rem 4rem;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};
`;

const SectionAction = styled(Link)`
  display: inline-block;
  padding: 12px 16px 10px;
  font-size: 18px;
  font-size: 1rem;
  line-height: 1.25;
  background-color:  ${Theme.colors.white.base};
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 700;
  color: ${Theme.colors.primary.light};
  text-align: center;
  box-shadow: inset 0 0 0 2px ${Theme.colors.primary.light};
  transition: all 0.15s ease;

  &:hover {
    color: ${Theme.colors.primary.base};
    box-shadow: inset 0 0 0 2px ${Theme.colors.primary.base};

  }
`;

const BlogSection = ({ children }) => {
  return(
  <Box>
  <Wrapper>
    <GoogleFontLoader
          fonts={[
              {
                  font: 'Poppins',
                  weights: [200, 300, 400, 600],
              },
          ]}
        />
      <Wrapper className="column is-12">
        <GenericSectionTitle text="Acompanhe os nossos últimos posts" />
        {children}
        <div className="column is-12 has-text-centered">
          <SectionAction to="/blog">
            VER TODOS
          </SectionAction>
        </div>
    </Wrapper>
   
  </Wrapper>
  </Box>
)};

export default BlogSection;

BlogSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};

BlogSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import whitebg from '../../static/img/whitebg.jpg';
import harvard from '../../static/img/harvard.png';
import Theme from '../../config/theme';

import CourseBadge from './CourseBadge';

const Box = styled.div`
  background: url(${whitebg}) no-repeat no-repeat bottom right;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};
  background-size: cover;

  display: grid;
  grid-template-columns: 4fr 2fr;
  padding: 2rem 1rem 3rem;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    padding: 2rem 4rem 3rem;
  }
  grid-gap: 40px;

  & div.implante-box {
  }

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    grid-template-columns: 1fr;
    background: url(${whitebg}) no-repeat no-repeat bottom;

  }
`;

const Title = styled.h2`
  grid-column: 1/-1;
  font-size: 50px;
  color: ${Theme.colors.white.dark};
`;

const Text = styled.p`
  font-size: 20px;
  color: ${Theme.colors.white.dark};
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
  padding: 0 60px;

  & div {
    margin:0;

    & p {
      padding: 2px;
    }
  }
`;

const MainCoursesSection = ({ children, title, date }) => {
  return(
  <Box>
  <Wrapper>
    <GoogleFontLoader
          fonts={[
              {
                  font: 'Poppins',
                  weights: [300, 400, 600],
              },
          ]}
        />
    
    <Title>Formação premium para pacientes premium</Title>
    
    <div className='implante-box'>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <ButtonContainer>
          <CourseBadge 
            courseName="Blackburn Course in Obesity Medicine: Obesity Medicine Board Review" 
            university="Harvard University"
            icon={harvard}
          />
      </ButtonContainer>

    </div> 
   
  </Wrapper>
  </Box>
)};

export default MainCoursesSection;

MainCoursesSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

MainCoursesSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import blackbg from '../../static/img/blackbg.jpg';
import Theme from '../../config/theme';

import RoundButton from './RoundButton';



const Box = styled.div`
  background: url(${blackbg}) no-repeat no-repeat bottom right;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};
  background-size: cover;

  display: flex;

  & div.implante-box {
    padding: 2rem 1rem 3rem;

    @media screen and (min-width: ${Theme.breakpoints.m}) {
      padding: 2rem 4rem 3rem;
    }
  }

  & img {
    max-width: 450px;
    padding: 40px 20px 5px 0; 
  }

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    flex-direction: column;

    & img {
      display: none; 
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 50px;
  color: ${Theme.colors.white.light};
`;

const Text = styled.p`
  font-size: 20px;
  color: ${Theme.colors.white.light};
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
      font-size: 25px;
      padding: 2px;
    }
  }
`;

const MainProductSection = ({ children, title, date }) => {
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
      
      <div className='implante-box'>
        <Title>Implante hormonal, o futuro hoje!</Title>

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
          <RoundButton text="Veja o vídeo" />
          <RoundButton text="Agendar consulta" />
        </ButtonContainer>

      </div> 
      
      <img />
    
    </Wrapper>
  </Box>
)};

export default MainProductSection;

MainProductSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

MainProductSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import cover from '../../static/raila/main11tratada.png'
import texture from "../../static/siteimg/texture.png";
import { Link } from 'gatsby';
import Theme from '../../config/theme';
import NoBgButton from '../components/shared/NoBgButton';
import {OpenModal} from "./shared/Portal/PortalService";

const Wrapper = styled.header`
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(90deg, ${Theme.colors.primary.base} 0%, ${Theme.colors.primary.light} 18%, #fff 60%, #f7f7f7 100%);
  font-family: Poppins;
  display: grid;
  
  grid-template-columns: 1fr 12fr 6fr;
  grid-template-rows: 200px 1fr;

  @media screen and (min-width: ${Theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${Theme.breakpoints.s}) {
    grid-template-columns: 1fr 8fr 5fr;
    grid-template-rows: 1fr 6fr;

  }

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    grid-template-columns: 1fr 8fr 5fr;
    grid-template-rows: 6fr 1fr 2fr;
  }

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-template-columns: 1fr 12fr 6fr;
    grid-template-rows: 6fr 1fr 2fr;
  }

  @media screen and (min-width: ${Theme.breakpoints.lxx}) {
    grid-template-columns: 3fr 12fr 6fr;
    grid-template-rows: 2fr 1fr 2fr;
  }

  &:before {
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    background: url(${texture}) no-repeat;
    background-size: cover;
  }

  &:after {
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    height: 100vh;
    background: 
      url(${cover}) 85% 100% no-repeat;
    background-size: 315px;
    margin: 0 auto;
  
  
    @media screen and (min-width: ${Theme.breakpoints.s}) {
      background: 
        url(${cover}) 100% 100% no-repeat;
      background-size: 315px;
    }
  
    @media screen and (min-width: ${Theme.breakpoints.m}) {
      background: 
        url(${cover}) 90% 100% no-repeat;
      background-size: 300px;
    }

    @media screen and (min-width: ${Theme.breakpoints.l}) {
      background: 
        url(${cover}) 80% 100% no-repeat;
      background-size: 315px;
    }

    
    @media screen and (min-width: ${Theme.breakpoints.lxx}) {
      background: 
        url(${cover}) 80% 100% no-repeat;
      background-size: 400px;
    }
  
    @media screen and (min-height: 900px) {
      background: 
        background-size: 400px;

    }
  }
`;

const Text = styled.div`
  grid-column: 1 / -1;
  z-index: 2;
  align-self: center;
  grid-row: 3;

  @media screen and (min-width: ${Theme.breakpoints.s}) {
    grid-column: 2;
    grid-row: 3;
  }

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    grid-column: 2;
    grid-row: 2;

  }

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-column: 2;
    grid-row: 2;
  }
    
  @media screen and (min-height: 900px) {
    grid-column: 2;
  }
`;

const Subtitle = styled.p`
  max-width: 500px;
  font-size: 26px;
  text-align: left;
  margin: 2rem 0;
  color: ${Theme.colors.black.base};
`;

const PositiveMessage = styled.h1`
text-align: center;
display: block; 
font-size: 25px;
letter-spacing: 0;
color: #333;
font-weight: 400;
text-shadow: 0px 3px 6px #00000050;
width: 100%;
margin-bottom: 0;
opacity: 1;
font-family: Poppins;
line-height: 1.2;

@media screen and (min-width: ${Theme.breakpoints.s}) {
  font-size: 35px;
  text-align: left;
  align-self: flex-end;
  text-shadow: 0px 3px 6px #00000029;
}

@media screen and (min-width: ${Theme.breakpoints.m}) and (max-width: ${Theme.breakpoints.l}) {
  font-size: 40px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${Theme.breakpoints.l}) and (max-width: ${Theme.breakpoints.lx}) {
  font-size: 40px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${Theme.breakpoints.lx}) {
  font-size: 40px;
  text-align: left;
}
`;

const StyledLink = styled.div`
  grid-column: 1/-1;
  z-index: 2;  

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-column: 3 / 5;
  }
`;

const Logo = styled.img`
  z-index: 2;  
  max-width: 240px;
`;

const DisplayNone = styled.div`

@media screen and (max-width:  ${Theme.breakpoints.s}){
  display: none;
}
`;

const HeaderCoverSection = ({ children, title, date }) => {

  function openScheduleModal() {
    OpenModal("schedule");
  };

  return(<Wrapper>
    <GoogleFontLoader
          fonts={[
              {
                  font: 'Poppins',
                  weights: [300, 400, 600],
              },
          ]}
        />

    <Text>
      <PositiveMessage>ENCONTRE NA <b>SAÚDE</b> A SUA <b>MELHOR VERSÃO</b></PositiveMessage>
      <DisplayNone>
        <Subtitle>
          Tenha acesso a tratamentos de primeira linha em Terapia de Reposição Hormonal, Suplementação Injetável e Protocolos Avançados de Emagrecimento
        </Subtitle>
      </DisplayNone>
      <Link to="/#" onClick={openScheduleModal()}>
        <NoBgButton>
          <p>Site em Construção</p>
        </NoBgButton>
      </Link>

      <DisplayNone>
        <Subtitle>
          São Paulo - Bauru - Piracicaba (SP)<br/> Sinop (MT)<br/> Fortaleza (CE)
        </Subtitle>
      </DisplayNone>
    </Text>
    
    {children && <Subtitle>{children}</Subtitle>}
    
  </Wrapper>
)};

export default HeaderCoverSection;

HeaderCoverSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

HeaderCoverSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

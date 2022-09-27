import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';
import NoBgButton from '../components/shared/NoBgButton';
import { Link } from 'gatsby';

import Theme from '../../config/theme';

const Box = styled.div`
  background-color: ${Theme.colors.white.light};
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};

  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: auto 3fr;
  grid-gap: 20px;
  padding: 2rem 2rem 3rem;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    padding: 2rem 4rem 3rem;
  }

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  grid-column: 1/-1;
  font-size: 50px;
  font-family: Poppins;
  font-weight: 300;
  color: ${Theme.colors.white.darkGrey};
`;

const Text = styled.p`
  font-size: 17;
  color: ${Theme.colors.white.dark};
  margin-bottom: 20px;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  padding-top: 40px;
`;

const TheMethodSection = ({ children, title, date }) => {
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
      
      <Title>Conheça sua Médica</Title>
      <div>
        <Text>
        Graduada em Medicina pela Universidade Federal do Amapá e com especialização em Nutrologia pelo Hospital Albert Einstein, a Dra. Raila Teixeira atende pacientes de diversas cidades do país que buscam emagrecer com saúde e ter acesso a tratamentos de primeira linha em Terapia de Reposição Hormonal, Suplementação Injetável e Protocolos Avançados de Emagrecimento. 
        </Text>

        <Text>
          Conhecida por estar em constante aperfeiçoamento profissional e científico, prioriza o alcance da qualidade de vida e longevidade dos seus pacientes por meio de tratamentos personalizados, elaborados a partir de uma análise completa de exames clínicos e laboratoriais. 
        </Text>

        
        <Text>
          Nas redes sociais e no seu canal no YouTube, a Dra. Raila está sempre divulgando informações a respeito de tratamentos para a obesidade e/ou sobrepeso, bem como é uma importante voz na divulgação científica médica, realizando comentários sobre artigos e estudos em andamento sobre implantes hormonais, emagrecimento, hipertrofia, performance física, libido, obesidade e qualidade de vida. Atualmente, a Dra. Raila Teixeira cumpre agenda de atendimentos nas cidades de São Paulo (SP), Bauru (SP), Sinop (MT), Piracicaba (SP) e Fortaleza (CE), como também realiza consultas via telemedicina.
        </Text>
      </div> 
      <FrameContainer>
        <iframe style={{margin: "0 auto"}} width="100%" height="315" 
                src="https://www.youtube.com/embed/9d2x_hYSx2c" title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <LinkStyled to="/#knowbetter">
          <NoBgButton color={Theme.colors.primary.base} maxWidth={'340px'}>
            <p>Siga a Dra Raila no Youtube</p>
          </NoBgButton>
        </LinkStyled>
      </FrameContainer>

    </Wrapper>
  </Box>
)};

export default TheMethodSection;

TheMethodSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

TheMethodSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

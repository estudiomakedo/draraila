import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from './modified/GoogleFontLoader';
import texture from "../../static/siteimg/texture.png";

import logo from '../../static/siteimg/logo.png';
import threatments1 from '../../static/raila/tratamentos1tratada.png';
import threatments2 from '../../static/raila/tratamentos2tratada.png';
import Theme from '../../config/theme';

import RoundButton from './RoundButton';
import NoBgButton from './shared/NoBgButton';



const Box = styled.div`
  background-image:  url(${logo}), url(${logo}), url(${texture});
  background-position: top right, bottom left, center center;
  background-repeat: no-repeat,no-repeat, no-repeat;
  background-size: auto, auto, cover;
`;

const BgLayer = styled.div`
  background-color: rgba(255,255,255, 0.6);
  background-size: cover;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};

  padding: 2rem 2rem 1rem;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    padding: 2rem 4rem 0;
  }


  @media screen and (max-width: ${Theme.breakpoints.l}) {
    flex-direction: column;
  }
`;

const PageTitle = styled.h2`
  display: block;
  font-family: Poppins;
  font-size: 50px;
  font-weight: 300;
  color: ${Theme.colors.white.darkGrey};
`;


const Threated2 = styled.img`
  position: relative;
  top: -200px;
  
  @media screen and (min-width: ${Theme.breakpoints.m}) and (max-width: ${Theme.breakpoints.l}) {
    top: -100px;
    max-width: 500px;
  }
`; 

const Threated1 = styled.img`
  position: relative;
  top: -200px;

  @media screen and (min-width: ${Theme.breakpoints.m}) and (max-width: ${Theme.breakpoints.l}) {
    top: 0px;
    max-width: 550px;
    margin-bottom: 50px;
    left: -90px;
  }
`; 


const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ColumnContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex:6;
  justify-content: ${props => props.justifyContent};
  z-index:2;

  @media screen and (max-width: ${Theme.breakpoints.m}) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const ColumnImage = styled.div`
  display: none;

  @media screen and (min-width: ${Theme.breakpoints.m}) and (max-width: ${Theme.breakpoints.l}) {
    display: flex;
    flex:4;
    margin: 0 0 -100px;
    max-width: 400px;
  }

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    display: flex;
    flex:4;
    margin: 0 0 -200px;
  }
`;

const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  padding: 30px;
  max-width: 600px;
  margin-top: ${props => props.noMargin? "0" :"3rem"};

  &:before {
    content: '';
    width:60px;
    height:60px;
    border-radius: 50%;
    background-color: ${props => props.colorFillBall};
    position: relative;
    display: block;
    top: -50px;
    left: -50px;
    z-index: 50;
  }

`;

const Title = styled.h3`
  font-size: 30px;
  font-family: Poppins;
  color: #666;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: Poppins;
  color: #888;
  margin: 20px 0 26px;
`;

const RelativeAdjustment = styled.div`
  margin: -60px 0 0;
`;

const Button = styled.div`
  padding: 5px;
  width: 160px;
  margin: 0;
  cursor: pointer;
  border: 2px solid #333;
  text-align: center;

  & p {
    font-family: Poppins;
    font-size: 14px;
  }
`;

const ThreatmentsSection = ({ children, title, date }) => {
  return(
  <Box>
    <BgLayer>
      <Wrapper>
        <GoogleFontLoader
              fonts={[
                  {
                      font: 'Poppins',
                      weights: [300, 400, 600],
                  },
              ]}
            />
        <PageTitle>Tratamentos</PageTitle>
        <Row>
          <ColumnContent justifyContent={"flex-start"}>
              <Card colorFillBall={Theme.colors.primary.base}>
                <RelativeAdjustment>
                  <Title>Implante Hormonal</Title>
                  <Description>
                    A Terapia de Reposição Hormonal via implantes subcutâneos tem se configurado como um dos mais eficazes tratamentos de distúrbios hormonais, tanto para homens como para mulheres.
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>

              <Card colorFillBall={Theme.colors.primary.light}>
                <RelativeAdjustment>
                  <Title>Suplementação Injetável</Title>
                  <Description>
                  Em muitos casos, sintomas relatados por pacientes ocorrem a partir de deficiências nutricionaiss. Nesses casos, após a realização de exames laboratoriais detalhados, as terapias injetáveis são indicadas.
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>

              <Card colorFillBall={Theme.colors.secondary.base}>
                <RelativeAdjustment>
                  <Title>Protocolos para Emagrecimento</Title>
                  <Description>
                  O tripé básico para emagrecer com saúde e sem efeito-sanfona envolve alimentação, exercícios e conduta farmacológica. E aí que entram os protocolos avançados para emagrecimento.
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>
          </ColumnContent>
          <ColumnImage>
          <Threated1 src={threatments1} />
          </ColumnImage>
        </Row>

        <Row>
        <ColumnImage>
          <Threated2 src={threatments2} />
        </ColumnImage>
          <ColumnContent justifyContent={"flex-end"}>
              <Card colorFillBall={Theme.colors.primary.base} noMargin={true}>
                <RelativeAdjustment>
                  <Title>Medicina Preventiva</Title>
                  <Description>
                  Doença não se trata. Evita-se! Se você também pensa assim e busca atendimento de qualidade em Medicina Preventiva, está no lugar certo!
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>

              <Card colorFillBall={Theme.colors.primary.light}>
                <RelativeAdjustment>
                  <Title>Acompanhamento Pós Bariátrica</Title>
                  <Description>
                  A cirurgia bariátrica não é um fim, mas um meio, através do qual você interrompe o processo de agravamento da obesidade. Acompanhamento pós-cirurgia bariátrica é esesencial.
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>

              <Card colorFillBall={Theme.colors.secondary.base}>
                <RelativeAdjustment>
                  <Title>Saúde da Mulher</Title>
                  <Description>
                  Na atenção à saúde da mulher, a Dra. Raila Teixeira realiza o acompanhamento desde as desordens metabólicas e hormonais que surgem a partir do início da idade reprodutiva.
                  </Description>
                  <Button>
                    <p>Conheça</p>
                  </Button>
                </RelativeAdjustment>
              </Card>
          </ColumnContent>
        </Row>
    </Wrapper>
    </BgLayer>
  </Box>
)};

export default ThreatmentsSection;

ThreatmentsSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

ThreatmentsSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

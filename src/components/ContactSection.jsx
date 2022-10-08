import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';
import GenericSectionTitle from '../components/shared/GenericSectionTitle';

import Theme from '../../config/theme';
import texture from "../../static/siteimg/texture.png";
import instagram from "../../static/siteimg/instagram.png";
import youtube from "../../static/siteimg/youtube.png";
import facebook from "../../static/siteimg/facebook.png";
import whatsapp from '../../static/whatsapp.png';
import { Link } from 'gatsby'


const Box = styled.div`
  background: url(${texture}) no-repeat no-repeat bottom right;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};
  background-size: cover;

  padding: 2rem 1rem 3rem;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    padding: 2rem 4rem 3rem;
  }

  & div.implante-box {
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${Theme.breakpoints.m}) {
    flex-direction: column;
  }
`;

const ContactCard = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  background-color: ${Theme.colors.white.light};
  margin: 1rem 1rem 0 1rem;
  flex: ${props => props.flex};
  padding: 2rem;
`;

const Title = styled.h4`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 300;
  margin: 0 0 1rem 0;
  text-align: center;
  color: ${Theme.colors.black.light};
`;


const ContactInfo = styled.div`
  margin: 0 0 20px;

`;

const City = styled.h5`
  font-family: Poppins;
  font-size: 26px;
  color: #707070;
  font-weight: 300;
  margin: 0 0 10px;
`;

const Group = styled.div` 
  display:flex; 
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const GroupInfo = styled.p`
  font-family: Poppins;
  font-size: 22px;
  color: #707070;
  margin: 0 15px;
  font-weight: 300;
`;

const GroupImg = styled.a`
  & img {
    max-width: 80px;
    margin: 10px;
  }
`;


const WhatsappButton = styled(Link)`
  font-size: 18px;
  background-color: ${Theme.colors.primary.base};
  padding: 0.4rem;
  text-align: center;
  margin: 0;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 200px;
  border-radius: 15px;
`;

const Icon = styled.img`
  margin: 0 10px 0 0;
  max-width: 15px;
`;


const contacts = [
  {city: 'São Paulo, Baurú (SP)', phone: 'NÚCLEO DE SAÚDE E PERFORMANCE DRA. RAILA TEIXEIRA AV. Getúlio Vargas 22-25, edifício PRIME SQUARE, jardim Europa', mail: 'example@draraila.com.br'},
  {city: 'Sinop (MT)', phone: 'Av. DAS EMBAÚBAS, 1276, ANDAR 01 SALA 02, CEP 78550-206, Sinop (MT) - Brasil.', mail: 'example@draraila.com.br'},
  {city: 'Fortaleza (CE)', phone: '', mail: 'example@draraila.com.br'},
];

const ContactSection = ({ children, title, date }) => {
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
      
      <GenericSectionTitle text="Dúvidas? Fale comigo!" styles={{color: Theme.colors.black.base, paddingLeft: 30}} />
      <Row>
        <ContactCard flex={7}>
          <Title>Contato</Title>
          <ContactInfo>
            {contacts.map((contact, index) => (
                <City key={index}>{contact.city}</City>
            ))}
          </ContactInfo>
          <WhatsappButton to="https://wa.me/5514998757024?" target={"_blank"}><Icon src={whatsapp} /> (14)99875-7024</WhatsappButton>
        </ContactCard>
        <ContactCard flex={3}>
          <Title>Raila nas Redes</Title>
          <Group>
            <GroupImg href={"https://www.instagram.com/drarailateixeira/"}><img src={instagram} target="_blank" /></GroupImg>
            <GroupImg href={"https://www.youtube.com/channel/UCqpLklrmp8tgoyty_4PWBNQ"} target="_blank"><img src={youtube} /></GroupImg>
            <GroupImg href={"https://www.facebook.com/dra.raila/"}><img src={facebook} target="_blank" /></GroupImg>
          </Group>
        </ContactCard>

      </Row>
    
    </Wrapper>
  </Box>
)};

export default ContactSection;

ContactSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

ContactSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};

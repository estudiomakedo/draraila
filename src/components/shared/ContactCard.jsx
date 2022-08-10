import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../../config/theme';
import ReactDOM from 'react-dom';

import emailImg from '../../../static/icon/email.png';
import phoneImg from '../../../static/icon/phone.png';
import {OpenModal} from "./Portal/PortalService";
import PortalWrapper from "./Portal/PortalWrapper";

export default class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  componentDidMount() {
  }

  openMap(url, city) {
    console.log(url)
    if(!!url){
      this.setState({url})
      OpenModal(city);
    }
  }

    render() {
      const {city, email, address, phone, url} = this.props;
      return (
        <Container>
          <City>{city}</City>
          <InformationContainer>
            <img src={emailImg} />
            <Text>{email}</Text>
          </InformationContainer>
          <InformationContainer>
            <img src={phoneImg} />
            <Text>{phone}</Text>
          </InformationContainer>
          <Address>{address}</Address>
          
          <ContactButton onClick={() => this.openMap(url, city)}>
            <ButtonText>VER NO MAPA</ButtonText>
          </ContactButton>

          <PortalWrapper identifier={city} styles={{flexDirection: 'column'}}>
            <Text style={{marginBottom: '5px'}}>{city}</Text>
            <iframe src={this.state.url} width="500px" height="500px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </PortalWrapper>
        </Container>
      );
    }
  }
  
  ContactCard.defaultProps = {
    city:'',
    email: '',
    phone: '',
    address:'',
    url: ''
  };

const Container = styled.div`
  background-color: ${Theme.colors.primary.lighter};
  border-radius: 5px;

  margin: 1rem;

  @media screen and (min-width: ${Theme.breakpoints.s}) {
    margin: 0 1rem;
  }

`;

const InformationContainer = styled.div`
  display: flex;
  padding: 1rem 1rem 0;
  align-items: center;

  & img {
    width: 30px;
    margin-right: 10px;
  }
`;

const City = styled.h3`
  font-family: Poppings;
  font-weight:500;
  font-size: 30px;
  text-align: center;
  padding 2rem 0 1rem;
  color: ${Theme.colors.black.base};
`;

const Text = styled.h3`
  font-family: Poppins;
  color: ${Theme.colors.black.light};
  font-size: 20px;
  font-weight: 400;
  margin:0;
`;

const Address = styled.p`
  font-family: Poppins;
  color: ${Theme.colors.black.light};
  font-size: 24px;
  font-weight: 400;
  margin:0;
  padding: 2rem;
  text-align: center;
`;

const ContactButton = styled.div`
  background-color: ${Theme.colors.primary.base};
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${Theme.colors.primary.light};
    transition: 0.3s;
  }
`;

const ButtonText = styled.h4`
  color: ${Theme.colors.white.base};
  text-align: center;
`;
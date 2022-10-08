import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../../config/theme';
import ReactDOM from 'react-dom';

import GenericSectionTitle from "../../components/shared/GenericSectionTitle";
import whatsapp from '../../../static/whatsapp.png';
import {OpenModal} from "./Portal/PortalService";
import PortalWrapper from "./Portal/PortalWrapper";

export default class SchedulePortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };

  }

  componentDidMount() {
  }

  openMap(url, city) {
    console.log(url)
    if(!!url){
      this.setState({url})
      OpenModal("schedule");
    }
  }

  generateWhatsappMessage = (name, email, text, choice) => {
    let firstPart = "Oi, tudo bem?";
    let secondPart = "Gostaria muito de agendar uma consulta";
    let thirdPart = "Quais são os horarios disponíveis?";

    if(!!name){
    firstPart = `Oi, eu me chamo ${name}.`;
    }
    if(!!email && !!choice){
        if(choice == 'online')
        secondPart = ` Gostaria muito de agendar uma consulta ${choice}. Meu melhor método de contato é o ${email}. `;
        else
        secondPart = ` Gostaria muito de agendar uma consulta para a localidade ${choice}. Meu melhor método de contato é o ${email}. `;

    } else if (!!email){
    secondPart = ` Gostaria muito de agendar uma consulta. Meu melhor método de contato é o ${email}. `;

    }
    if(!!text)
    thirdPart = text;
    this.setState({name: '', email: '', text: '', choice:''});
    window.open(`https://wa.me/5514998757024?text=${encodeURIComponent(firstPart)}%0A%0A${encodeURIComponent(secondPart)}%0A%0A${encodeURIComponent(thirdPart)}`)
  }

    render() {
      return (
        <Container>
          <PortalWrapper identifier={"schedule"} styles={{flexDirection: 'column', backgroundColor: Theme.colors.white.base}}>
          <GenericSectionTitle text="Agende uma consulta" styles={{color: "#666", marginBottom: 10, textAlign: 'left', width: '100%', paddingLeft: 20}} />
            <ABody>
              <div>
                <InputBlue 
                  onChange={event => this.setState({name: event.target.value})} 
                  value={this.state.name} 
                  placeholder="Seu nome" 
                  type="text"/>

                <InputBlue 
                  onChange={event => this.setState({email: event.target.value})} 
                  value={this.state.email} 
                  placeholder="Telefone ou e-mail de contato" type="text"/>

                <TextAreaBlue 
                  onChange={event => this.setState({text: event.target.value})} 
                  value={this.state.text} placeholder="Descreva aqui mais detalhes sobre o motivo de sua marcação"></TextAreaBlue>
              </div>

              <div>
                <ChooseLocationContainer>
                  <p>Escolha a localidade do atendimento</p>
                  <div>
                    <input type="radio" id="sp" name="choice"
                      value="São Paulo" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="sp">São Paulo</label>
                  </div>

                  <div>
                    <input type="radio" id="pi" name="choice"
                      value="Piracicaba" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="pi">Piracicaba</label>
                  </div>

                  <div>
                    <input type="radio" id="for" name="choice"
                      value="Fortaleza" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="for"> Fortaleza</label>
                  </div>

                  <div>
                    <input type="radio" id="sin" name="choice"
                      value="Sinop" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="sin"> Sinop</label>
                  </div>

                  <div>
                    <input type="radio" id="bau" name="choice"               
                      value="Bauru" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="bau">Bauru</label>
                  </div>

                  <div>
                    <input type="radio" id="online" name="choice"               
                      value="online" 
                      onChange={event => this.setState({choice: event.target.value})}   />
                    <label for="online">Online</label>
                  </div>
                  
                </ChooseLocationContainer>
                
                <SubmitContainer>
                  <SubmitButton onClick={() => this.generateWhatsappMessage(this.state.name, this.state.email, this.state.text, this.state.choice)}>
                      <SubmitButtonText>Enviar <Icon src={whatsapp} /></SubmitButtonText>
                  </SubmitButton>
                  <AltSpan>Ao clicar em enviar, você será redirecionado ao WhatsApp da Dra. Raila</AltSpan>
                </SubmitContainer>
              </div>

            </ABody>
          </PortalWrapper>
        </Container>
      );
    }
  }
  
  SchedulePortal.defaultProps = {
  };


const Container = styled.div`
background-color: ${Theme.colors.white.base};
  
`;


const ABody = styled.div`
  padding: 1rem;
  border-radius: 0 0 20px 20px;
  display: grid;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
  }  
`;

const InputBlue = styled.input`
  background-color: ${Theme.colors.white.light};
  border: 0;
  width: 100%;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 18px;
`

const TextAreaBlue = styled.textarea`
  background-color: ${Theme.colors.white.light};
  border: 0;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 18px;
`;

const SubmitContainer = styled.div`
  max-width: 150px;
  margin: 0 auto;
`;

const SubmitButton = styled.a`
  background-color: ${Theme.colors.secondary.base};
  border-radius: 17px;
  display: block;
  max-width: 150px;
  margin: 0 auto;
  padding: 0px 0px;
`;

const SubmitButtonText = styled.p`
  font-size: 18px;
  color: ${Theme.colors.white.base};
  padding: 0.4rem;
  text-align: center;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin: 0 0 0 5px;
  max-width: 15px;
`;

const AltSpan = styled.span`
  color: #707070;
  font-size: 12px;
  text-align: center;
  display: block;
  margin-top: 5px;
`;

const ChooseLocationContainer = styled.div`
  background-color: ${Theme.colors.white.light};
  padding: 20px;

  & p {
    color: #666;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;


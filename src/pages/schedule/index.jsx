import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import InternalHeader from "../../components/internalHeader";
import styled from '@emotion/styled';
import whatsapp from '../../../static/whatsapp.png';
import Theme from '../../../config/theme';
import GenericSectionTitle from "../../components/shared/GenericSectionTitle";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

    generateWhatsappMessage = (name, email, text) => {
        let firstPart = "Oi, tudo bem?";
        let secondPart = "Gostaria muito de agendar uma consulta";
        let thirdPart = "Quais são os horarios disponíveis?";

        if(!!name){
        firstPart = `Oi, eu me chamo ${name}.`;
        }
        if(!!email){
        secondPart = ` Gostaria muito de agendar uma consulta. Meu melhor método de contato é o ${email}. `;
        }
        if(!!text)
        thirdPart = text;
        window.open(`https://wa.me/5511939277280?text=${encodeURIComponent(firstPart)}%0A%0A${encodeURIComponent(secondPart)}%0A%0A${encodeURIComponent(thirdPart)}`)
    }


  render() {
    return (
      <Layout>
        <InternalHeader/>
        <section className="section" style={{backgroundColor: Theme.colors.primary.lighter}}>
            <GenericSectionTitle text="Agende uma consulta" />
            <ABody>
                <InputBlue onChange={event => this.setState({name: event.target.value})} value={this.state.name} placeholder="Seu nome" type="text"/>

                <InputBlue onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="Telefone ou e-mail de contato" type="text"/>

                <TextAreaBlue onChange={event => this.setState({text: event.target.value})} value={this.state.text} placeholder="Descreva aqui mais detalhes sobre o motivo de sua marcação">
                    
                </TextAreaBlue>

                <SubmitButton onClick={() => this.generateWhatsappMessage(this.state.name, this.state.email, this.state.text)}>
                    <SubmitButtonText>Enviar <Icon src={whatsapp} /></SubmitButtonText>
                </SubmitButton>
            </ABody>
        </section>
      </Layout>
    );
  }
}

const ABody = styled.div`
  padding: 1rem;
  background-color: ${Theme.colors.primary.lighter};
  border-radius: 0 0 20px 20px;
`;

const InputBlue = styled.input`
  background-color: ${Theme.colors.secondary.lighter};
  border: 0;
  width: 100%;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 18px;

`

const TextAreaBlue = styled.textarea`
  background-color: ${Theme.colors.secondary.lighter};
  border: 0;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 18px;
`;

const SubmitButton = styled.a`
  background-color: ${Theme.colors.secondary.base};
  border-radius: 17px;
  display: block;
  max-width: 100px;
  margin: 0 auto;
`;

const SubmitButtonText = styled.p`
  font-size: 14px;
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
import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import InternalHeader from "../../components/internalHeader";
import styled from '@emotion/styled';

import Theme from '../../../config/theme';

//images
import banana from '../../../static/stocks/banana.png';
import bariatrica from '../../../static/stocks/bariatrica.png';
import estetoscopio from '../../../static/stocks/estetoscopio.png';
import fitametrica from '../../../static/stocks/fitametrica.png';
import injetavel from '../../../static/stocks/injetavel.png';
import mulher from '../../../static/stocks/mulher.png';

const threatmentList = [
  {
    id: "implante",
    color: Theme.colors.primary.light,
    title: "Implantes Hormonais",
    text: `
    A Terapia de Reposição Hormonal via implantes subcutâneos tem se configurado como um dos mais eficazes tratamentos de distúrbios hormonais, tanto para homens como para mulheres.
    \n
    Apelidado de “Chip da Beleza” pela imprensa, essa via de reposição hormonal já é utilizada há mais de 40 anos, período no qual o tratamento passou por constantes aperfeiçoamentos e estudos, até figurar como a mais eficiente e segura forma de tratar distúrbios hormonais de vários tipos.
    \n
    A alcunha de “Chip da Beleza” se deu pelo fato de que o tratamento ficou mais conhecido pelos bons “efeitos colaterais” relatados pelos pacientes, como aumento de massa muscular, melhora da saúde e firmeza da pele, facilita a queima de gordura corporal, aumenta a disposição e a libido, por exemplo.
    \n
    A indicação ao tratamento é feita após a realização de consulta com a Dra. Raila e a análise dos exames clínicos e laboratoriais do paciente. Se você nunca fez um check-up dos seus medidores hormonais, clique no botão abaixo agende a sua consulta, na modalidade presencial ou por telemedicina!`,
    img: injetavel
  },
  {
    id: "injetavel",
    color: Theme.colors.primary.base,
    title: "Suplementação Injetável",
    text: `Em muitos casos, sintomas e queixas relatados por pacientes não terminam em diagnóstico de alguma doença, mas na constatação de deficiências nutricionais que são as responsáveis pelos sintomas. Déficits nutricionais ocorrem por conta da oferta inadequada de nutrientes, vitaminas e minerais pela alimentação ou por alguma dificuldade de o organismo não estar absorvendo esses nutrientes, em decorrência de alguma síndrome autoimune, por disbiose ou inflamação crônica causada pelo sobrepeso, comprometendo o trato gastrointestinal.
    \n
    Não é raro ver casos de pessoas que estão obesas ou acima do peso, mas em quadro de desnutrição. Nesses casos, após a realização de exames laboratoriais detalhados, as terapias injetáveis são indicadas.
    \n
    O tratamento é individualizado e focado no déficit nutricional encontrado nos exames e levando-se em conta o quadro clínico do paciente, buscando resolver as principais queixas (fadiga, insônia, sonolência diurna, baixa libido, indisposição etc.).
    \n
    A principal vantagem da suplementação injetável está no aumento rápido da biodisponibilidade das substâncias que estavam em fala no corpo, ou seja, o aumento da quantidade disponível na corrente sanguínea para que ela possa realizar as suas funções no organismo.
    `,
    img: fitametrica
  },
  {
    id: "emagrecer",
    color: Theme.colors.secondary.dark,
    title: "Protocolos Avançados para Emagrecimento",
    text: `Emagrecer do jeito certo envolve não atingir o déficit calórico. O tripé básico para emagrecer com saúde e sem efeito-sanfona envolve alimentação, exercícios e conduta farmacológica. E aí que entram os protocolos avançados para emagrecimento.
    \n
    Os protocolos são individualizados e a sua elaboração leva em conta o quadro clínico e exames de cada paciente, podendo envolver terapias injetáveis, reposição hormonal e prescrição de medicamentos via oral. Tudo com o constante acompanhamento da Dra. Raila, para verificar a evolução e os resultados do paciente.
    \n
    O Protocolo #25, por exemplo, é indicado para pacientes que precisam perder gordura corporal o mais rápido possível, devido as complicações da obesidade. Com o tratamento, é possível emagrecer a partir de 11 quilos em apenas 25 dias, graças à alta tecnologia em terapia ortomolecular injetável com a qual o tratamento foi desenvolvido.
    \n
    Se você está acima do peso, conheça esse e outros tratamentos disponíveis, clicando no botão abaixo para receber um e-book interativo que explica tudinho para você e ainda te deixa a 1 clique da equipe da Dra. Raila, que está a postos para tirar todas as suas dúvidas e agendar o seu atendimento!`,
    img: banana
  },
  {
    id: "preventiva",
    color: Theme.colors.primary.light,
    title: "Medicina Preventiva",
    text: `
    Doença não se trata. Evita-se! Se você também pensa assim e busca atendimento de qualidade em Medicina Preventiva, está no lugar certo! A Dra. Raila Teixeira realiza acompanhamento individual de quem busca longevidade e manutenção da qualidade de vida em qualquer idade!
    `,
    img: estetoscopio
  },
  {
    id: "bariatrica",
    color: Theme.colors.primary.base,
    title: "Acompanhamento Pós-cirurgia Bariátrica",
    text: `
    A cirurgia bariátrica não é um fim, mas um meio, através do qual você interrompe o processo de agravamento da obesidade para, então, recuperar-se do quadro inflamatório sistêmico ao qual o seu organismo foi exposto, por um longo período, por conta do acúmulo de gordura corporal.
    \n
    O acompanhamento de pacientes pós-cirurgia bariátrica envolve tratamentos que visam regular a microbiota intestinal, reverter quadros de disbiose, suprir eventuais deficiências nutricionais através de terapias injetáveis, bioestimulação de colágeno para evitar a flacidez, condutas de reposição hormonal e adequação do metabolismo e abordagens preventivas.
    \n
    O acompanhamento pós-cirurgia bariátrica visa proporcionar ao paciente autonomia para realizar as suas atividades e manter um estilo de vida saudável, proporcionando longevidade, autoestima, aceitação, com resultados que viabilizam hipertrofia, disposição, libido, bom estado nutricional e muitos outros benefícios que caracterizam uma vida com saúde e qualidade após o procedimento.
    `,
    img: bariatrica
  },
  {
    id: "saude",
    color: Theme.colors.secondary.dark,
    title: "Saúde da Mulher",
    text: `
    Comumente, a mulher se preocupa mais com a saúde porque o seu corpo passa por ciclos muito mais adversos que o do homem. Na atenção à saúde da mulher, a Dra. Raila Teixeira realiza o acompanhamento desde as desordens metabólicas e hormonais que surgem a partir do início da idade reprodutiva e cuja complexidade aumenta com o início do climatério e a chegada da menopausa.
    \n
    A mulher que se cuida entende que os 40 são os novos 30, os 50 são os novos quarenta e assim por diante, não se entregando às reverberações que uma rotina estressante e adversa causa em um corpo em constante transformação.
    \n
    Além da abordagem da medicina preventiva, as pacientes da Dra. Raila Teixeira contam com um amplo suporte em tratamentos para o sobrepeso e a obesidade, terapias de reposição hormonais, implantes hormonais contraceptivos, protocolos injetáveis, acompanhamento no contexto de doenças autoimunes, além de procedimentos estéticos como aplicação de botox, bioestimuladores de colágeno, lifting temporal não cirúrgico, entre outros.
    `,
    img: mulher
  },

]

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  renderContentText(text) {
    const splitted = text.split('\n');
    return splitted.map(e => <ContentText>{e}</ContentText>)
  }


  render() {
    return (
      <Layout>
        <InternalHeader title="Tratamentos" />
        <Box>
          <Container>
            {threatmentList.map(e => (
              <ThreatmentContainer id={e.id}>
                <TitleRelativeContainer bgColor={e.color}>
                  <TitleRelative>{e.title}</TitleRelative>
                </TitleRelativeContainer>
                <ContentBox>
                  <div>
                    {this.renderContentText(e.text)}
                  </div>
                  <ContentImg src={e.img}/>
                </ContentBox>
              </ThreatmentContainer>
            ))}
            
          </Container>
        </Box>
      </Layout>
    );
  }
}

const Box =  styled.section`
  background-color: ${Theme.colors.white.light};
`;

const Container =  styled.section`
  max-width: ${Theme.maxWidth}
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const ThreatmentContainer = styled.div`
  background-color: ${Theme.colors.white.base};
  box-shadow: 0px 3px 6px #00000029;
  padding: 0 2rem 2rem 2rem;
  border-radius: 15px;
  max-width: 1000px;
  margin: 0 auto 4rem;
`;

const TitleRelativeContainer = styled.div`
  padding: 0.5rem 3rem;
  background: ${props => props.bgColor};
  border-radius: 25px;
  display: inline-block;
  font-size: 25px;
  font-family: 'Poppins';
  color: ${Theme.colors.white.light};
  position: relative;
  top: -25px;
  left: -75px;
`;

const TitleRelative = styled.h3``;

const ContentBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ContentText = styled.p`
  font-family: 'Poppins';
  margin-top: 1rem;
  line-height: 1.4;
  &:nth-last-child(1){
    margin-top: 0;
  }

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    margin-bottom: 1rem;
  }
`;

const ContentImg = styled.img`
  position: relative;
  width: 200px;
  transform: rotate(0);
  left: 100px;

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    left: 0;
    width: 300px;
  }
`;

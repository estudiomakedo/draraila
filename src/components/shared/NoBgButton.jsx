import React, {Component} from 'react';
import styled from '@emotion/styled';
import Theme from '../../../config/theme';
import {OpenModal} from "./Portal/PortalService";

export default class NoBgButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  componentDidMount() {
  }

    render() {
      const {children, color, maxWidth} = this.props;
      return (
        <Container color={color} maxWidth={maxWidth}>
          {children}
        </Container>
      );
    }
  }
  
  
  NoBgButton.defaultProps = {
    children: false,
    color: '',
    maxWidth: ''
  };

const Container = styled.div`
padding: 20px 15px;
box-shadow: 0px 3px 6px #00000029;
max-width: ${props => props.maxWidth? props.maxWidth: '280px'};
border: 2px solid ${props => props.color? props.color :'#333'};

@media screen and (max-width:  ${Theme.breakpoints.s}){
  margin: 0.5rem auto;
}

& p {
  font-size: 20px;
  color: ${props => props.color? props.color :'#333'};
  text-align: center;
}
`;
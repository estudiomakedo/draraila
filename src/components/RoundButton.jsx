import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';


export default class RoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {text, styles} = this.props;
      return (
        <Container style={{...styles}}>
          <Text>{text}</Text>
        </Container>
      );
    }
  }
  
  RoundButton.defaultProps = {
    text:'',
    styles: {}
  };

const Container = styled.div`
  background-color: ${Theme.colors.primary.light};
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow:  0px 3px 6px #00000029;
  max-width: 240px;
  margin: 3rem auto 0;
  @media screen and (min-width: ${Theme.breakpoints.s}) {
    align-self: center;
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin:0;
`;
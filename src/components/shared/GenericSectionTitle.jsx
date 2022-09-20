import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../../config/theme';
import ReactDOM from 'react-dom';


export default class GenericSectionTitle extends React.Component {
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
  
  GenericSectionTitle.defaultProps = {
    text:'',
    styles: {}
  };

const Container = styled.div`
  margin: 0 0 2rem;
  color: ${Theme.colors.white.light};

`;

const Text = styled.h3`
  font-family: Poppins;
  font-size: 43px;
  font-weight: 300;
  margin:0;
`;
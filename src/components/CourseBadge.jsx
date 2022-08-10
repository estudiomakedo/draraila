import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';


export default class CourseBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {courseName, university, icon, styles} = this.props;
      return (
        <Container style={{...styles}}>
        <div>
        <Text>{courseName}</Text>
          <TextBold>{university}</TextBold>
        </div>
 
          <img src={icon} />
        </Container>
      );
    }
  }
  
  CourseBadge.defaultProps = {
    courseName:'',
    university: '',
    icon: '',
    styles: {}
  };

const Container = styled.div`
  background-color: ${Theme.colors.white.light};
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow:  0px 3px 6px #00000029;
  margin: 3rem auto 0;
  max-width: 400px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  
  @media screen and (min-width: ${Theme.breakpoints.s}) {
    align-self: center;
  }

  & img {
    justify-self: stretch;
  }
`;

const Text = styled.p`
  text-align: left;
  font-size: 16px;
  margin:0;
  color:${Theme.colors.black.base}
`;

const TextBold = styled.p`
  color: #fff;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: ${Theme.colors.primary.base};
  margin:0;
`;
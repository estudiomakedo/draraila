import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../../../config/theme';
import ReactDOM from 'react-dom';

import Portal from './Portal';
import cancelImg from '../../../../static/icon/cancel.png';


export default class PortalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
    };
  }


  componentDidMount() {
  }

  hide(){
    const portal = typeof document !== `undefined` ? document.getElementById(this.props.identifier) : null;
    if(portal){
        portal.style.display = 'none';

    }
  }

    render() {
    const { children, identifier, styles } = this.props
 
      return (
      <Portal>
        <Container id={identifier}>
          <div style={{display: 'flex'}}>
            <Box style={styles}>
              {children}
            </Box>
            <ImgContainer onClick={() => this.hide()}>
                <img src={cancelImg} />
            </ImgContainer>
          </div>

        </Container>
       </Portal>
      );
    }
  }
  
  PortalWrapper.defaultProps = {
    identifier: '',
    styles: {},
  };

const Container = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(33, 33, 33, 0.85);
  z-index: 2;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 7px #333;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 12px;
`;

const ImgContainer = styled.div`
    background-color: #f7f7f7;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: relative;
    top: -12px;
    right: 21px;
    cursor: pointer;
`;

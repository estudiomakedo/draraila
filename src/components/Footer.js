import * as React from "react";
import { Link } from "gatsby";
import styled from '@emotion/styled';
import logo from "../../static/siteimg/logo.png";
import logoNome from "../../static/siteimg/pngnome.png";
import Theme from '../../config/theme';
import blackbg from '../../static/img/blackbg.jpg';

const Footer = class extends React.Component {

  constructor(props) {
    super(props);
  }

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <Footers id="footer">
        <LogoBar>
          <LogoImg src={logo} style={{marginRight: 6, marginLeft: 16}} />
          <LogoImg src={logoNome} />
          <CRM>CRM 190912</CRM>
        </LogoBar>

        <Copyright>
           Copyright {this.getYear()} - Ed Mágica & StudioMakedo
        </Copyright>

      </Footers>
    );
  }
};

const Footers = styled.footer`
  box-shadow: 0px 0px 10px #00000029;
  background-color: #fff;
  border-radius: 0px 20px 0px 0px;
  width: 100%;
  display: flex;
  padding: 8px 0;
  justify-content: space-between;
  font-family: Poppins;
  transition: all 0.5s ease-in-out;
  flex-direction: column;
  align-items: center;
  display: flex;
  @media screen and (min-width: ${Theme.breakpoints.m}) {
    flex-direction: row;
  }

`; 

const LogoBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 42px;
  
`;

const CRM = styled.span`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 12px;

  @media screen and (min-width: ${Theme.breakpoints.s}) {
    margin-left: 12px;
    font-size: 14px;
  }
  
`;

const Copyright = styled.h5`
  margin: 0 1rem 0 0;
  font-size: 12px;
  font-weight: 300;
  font-family: Poppins;
  color: #707070;
`;

export default Footer;

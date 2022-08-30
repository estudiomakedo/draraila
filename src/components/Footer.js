import * as React from "react";
import { Link } from "gatsby";
import styled from '@emotion/styled';

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import Theme from '../../config/theme';
import blackbg from '../../static/img/blackbg.jpg';
import GenericSectionTitle from '../components/shared/GenericSectionTitle';

import ContactCard from "../components/shared/ContactCard"
import PortalWrapper from "../components/shared/Portal/PortalWrapper";
const Footer = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }
};

const Footers = styled.footer`
background: url(${blackbg}) no-repeat no-repeat bottom right;

`; 

const ContactContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-bottom: 2rem;

@media screen and (min-width: ${Theme.breakpoints.s}) {
  flex-direction: row;
}
`;

export default Footer;

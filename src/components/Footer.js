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
      <Footers className="footer has-background-black has-text-white-ter" id="footer">
        <GenericSectionTitle text="Dúvidas? Fale comigo!" styles={{color: Theme.colors.white.base, paddingLeft: 30}} />
        <ContactContainer>
          <ContactCard     
            city='Salvador'
            email='email@example.com'
            phone='(71)99999-9999'
            address="Av Tancredo Neves número 1234, sala 2022"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.284703101517!2d-38.4534453!3d-12.983286750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71616510cac211f%3A0xd5a41097a534a48b!2sSalvador%20Shopping!5e0!3m2!1spt-BR!2sus!4v1657597772194!5m2!1spt-BR!2sus" />
          <ContactCard     
            city='Viória da Conquista'
            email='email@example.com'
            phone='(71)99999-9999'
            address="Av Tancredo Neves número 1234, sala 2022"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.284703101517!2d-38.4534453!3d-12.983286750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71616510cac211f%3A0xd5a41097a534a48b!2sSalvador%20Shopping!5e0!3m2!1spt-BR!2sus!4v1657597772194!5m2!1spt-BR!2sus" />
         </ContactContainer>
        {/*
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                   <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>*/}
      </Footers>
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

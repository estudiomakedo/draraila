import React from "react";
import { Link } from "gatsby";
import logo from "../../static/siteimg/logo.png";
import logoNome from "../../static/siteimg/pngnome.png";
import styled from '@emotion/styled';
import Theme from '../../config/theme';
import GoogleFontLoader from './modified/GoogleFontLoader';

const NavWrapper = styled.div`
  z-index: 5;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #f3f3f3;
  border-radius: 0px 0px 20px 0px;
  position: ${props => props.isFixed ? `fixed`:`absolute`};
  width: 100%;
  display: flex;
  padding: 8px 0;
  justify-content: space-between;
  font-family: Poppins;
  transition: all 0.5s ease-in-out;
  transform: ${props => props.isFixed ? `translateY(0%)`:`translateY(-100%)`};
  flex-direction: column;

  display: flex;
  @media screen and (min-width: ${Theme.breakpoints.m}) {
    flex-direction: row;
  }

`;

const NavBar = styled.nav`
  display: none;
  justify-content: flex-end;
  flex: 1;
  align-items: center;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    display: flex;
  }
`;

const NavSM = styled.nav`
  display: flex;
  @media screen and (min-width: ${Theme.breakpoints.m}) {
    display: none;
  }
`;

const LogoBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: block;
  color: ${Theme.colors.black.base};
  text-align: center;
  font-size: 18px;
  margin: 0 10px;

  &:hover {
    color: ${Theme.colors.white.grey};
  }
`;

const NavItemSpecial = styled(Link)`
  display: block;
  color: ${Theme.colors.black.base};
  font-size: 14px;
  background-color: ${Theme.colors.primary.light};
  padding: 4px 10px;
  border: 3px solid ${Theme.colors.primary.light};
  border-radius: 0px 0px 15px 0px;
  margin: 0 10px;

  &:hover {
    color: ${Theme.colors.white.grey};
  }
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

const StyledList = styled.ul`
  margin: 25px 0 0;
  list-style: none;
  width: 100%
`;

const StyledListItem = styled.li`
  padding: 10px 0;
  text-align: center;
  &:hover {
    background-color: ${Theme.colors.primary.light};
  }
`;

const HamburguerMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: ${Theme.breakpoints.m}) {
    display: none;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSMVisible: false,
      scrollY: '0',
      scrollYBefore: '0',
      isStickyHeader: false,
    };
    this.setVisible = this.setVisible.bind(this);
    this.ScrollRateCalculation = this.ScrollRateCalculation.bind(this);
  }

  ScrollRateCalculation() {
    let innerHeight = window.innerHeight;
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    let heightIsHtml = rect.height; //B3
    let widthHtml = rect.width;
    let scrollMax = Math.ceil( heightIsHtml - innerHeight ); //C = B3 - A
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;//D
    let scrollRate = parseInt( (scrollY / scrollMax) * 100, 10 ); //E = (D / C) *100

    if(this.state.scrollYBefore < scrollY){
      this.setState({
        isStickyHeader: false
      });
    } else {
      this.setState({
        isStickyHeader: true
      });
    }

    this.setState({
      scrollY: scrollY,
      scrollYBefore: scrollY
    });

  }

  componentDidMount() {
    this.ScrollRateCalculation();
    
    document.addEventListener('scroll', this.ScrollRateCalculation);
    window.addEventListener('hashchange', this.ScrollRateCalculation);
    document.addEventListener('click', this.ScrollRateCalculation);
  }

  setVisible = () => {
    this.setState({navSMVisible: !this.state.navSMVisible})
  }

  render(){
    return(
    <NavWrapper isFixed={this.state.isStickyHeader}>
      <GoogleFontLoader
        fonts={[
            {
                font: 'Poppins',
                weights: [300, 400, 600],
            },
        ]}
      />

      <LogoBar>
        <LogoImg src={logo} style={{marginRight: 6, marginLeft: 16}} />
        <LogoImg src={logoNome} />
        <CRM>CRM 190912</CRM>
        <HamburguerMenu style={{alignItems: "center", width: "100%"}} onClick={() => this.setVisible() }>
          <svg style={{width: "15px", marginRight: "15px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </HamburguerMenu>
      </LogoBar>


      {this.state.navSMVisible?
        <NavSM>
          <StyledList>
            <StyledListItem>
              <NavItem to="/" onClick={() => this.toggleHamburger()}>
                Tratamentos
              </NavItem>
            </StyledListItem>
            <StyledListItem>
              <NavItem to="/" onClick={() => this.toggleHamburger()}>
                Blog
              </NavItem>
            </StyledListItem>
            <StyledListItem>
              <NavItem to="/" onClick={() => this.toggleHamburger()}>
                Contato
              </NavItem>
            </StyledListItem>
            <StyledListItem>
              <NavItem to="/" onClick={() => this.toggleHamburger()}>
                Agende uma Consulta
              </NavItem>
            </StyledListItem>
          </StyledList>
        </NavSM>
      : null }
      <NavBar 
        data-target="navMenu"
        role="menuitem"
        tabIndex={0}>
        <NavItem to="/" onClick={() => this.toggleHamburger()}>
          Tratamentos
        </NavItem>
        <NavItem to="/blog" onClick={() => this.toggleHamburger()}>
          Blog
        </NavItem>
        <NavItem to="/#footer" onClick={() => this.toggleHamburger()}>
          Contato
        </NavItem>
        <NavItemSpecial to="/schedule" onClick={() => this.toggleHamburger()}>
          Agende uma Consulta
        </NavItemSpecial>
      </NavBar>
    </NavWrapper>)
  }
};

export default Navbar;

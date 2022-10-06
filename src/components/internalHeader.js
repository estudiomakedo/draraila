import * as React from "react";
import styled from '@emotion/styled';
import texture from "../../static/siteimg/texture.png";
import profile from "../../static/raila/profile.png";
import { Link } from "gatsby";
import GenericSectionTitle from "./shared/GenericSectionTitle";
import Theme from '../../config/theme';

const InternalHeader = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <Headers> 
        <HeaderWrapper>
          <HeaderTitle>
            {title}
          </HeaderTitle>
          <RailaProfile src={profile} />         
        </HeaderWrapper>
      </Headers>

        
    );
  }
};

const Headers = styled.header`
  background: url(${texture}) repeat repeat top left;
  height: 300px;

  @media screen and (max-width: ${Theme.breakpoints.m}) {
    height: auto;
  }
`; 

const HeaderWrapper = styled.div`
  max-width: ${Theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 2rem 1rem 0;

  
  @media screen and (max-width: ${Theme.breakpoints.m}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const HeaderTitle = styled.h1`
  color: #666;
  font-size: 42px;
  font-family: Poppins;

  @media screen and (max-width: ${Theme.breakpoints.s}) {
    text-align: center;
  }
`;

const RailaProfile = styled.img`
  position: relative;
    width: 250px;
    box-shadow: 0px 2px 5px #666;
    border-radius: 50%;

    @media screen and (min-width: ${Theme.breakpoints.m}) {
      top: 100px;
    }
    

`;

export default InternalHeader;

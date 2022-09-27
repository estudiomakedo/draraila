import * as React from "react";
import styled from '@emotion/styled';
import texture from "../../static/siteimg/texture.png";
import { Link } from "gatsby";
import GenericSectionTitle from "./shared/GenericSectionTitle";

const InternalHeader = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <Headers> 
        <Link to={'/'}>
          <HeaderTitle>
            {title}
          </HeaderTitle>  
        </Link>
      </Headers>

        
    );
  }
};

const Headers = styled.header`
background: url(${texture}) no-repeat no-repeat top left;
height: 200px;
display: flex;
justify-content: flex-start;
align-items: end;
`; 

const HeaderTitle = styled.h1`
  margin: 0 0 0.5rem 1rem;
  color: #666;
  fontWeight: bold;
  font-size: 42px;
  font-family: Poppins;
`;

export default InternalHeader;

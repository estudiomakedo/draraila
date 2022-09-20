import * as React from "react";
import styled from '@emotion/styled';
import blackbg from '../../static/img/blackbg.jpg';
import { Link } from "gatsby";

const InternalHeader = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Headers> 
        <Link to={'/'}>
          {/*<img style={{maxWidth: '250px'}} src={} /> */}
        </Link>
      </Headers>

        
    );
  }
};

const Headers = styled.header`
background: url(${blackbg}) no-repeat no-repeat top left;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
`; 

export default InternalHeader;

import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from '../../common/header';

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const DefaultLayout = (props) => (
  <Fragment>
    <Header/>
    <ContentContainer>
      { props.children }
    </ContentContainer>
  </Fragment>
);

export default DefaultLayout;

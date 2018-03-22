import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Menu from './menu';

const HeaderSection = styled.header`
  width: 100%;
  background: #ededed;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0;
  width: 80%;
`;

const LogoContainer = styled.div`
  display: block;
`;

const Header = (props) => {
  return (
    <HeaderSection>
      <HeaderInner>
        <LogoContainer>
          <Logo
            src="/images/logo.png"
            width="100"
            link="/"
          />
        </LogoContainer>
        <Menu/>
      </HeaderInner>
    </HeaderSection>
  );
};

export default Header;

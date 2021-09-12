import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Todolist from 'pages/Todolist';
import ThemeBorder from 'components/atoms/ThemeBorder';
import ThingsLogo from 'assets/images/things_logo.png';

const CenterDiv = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  position: absolute;
  left: 5rem;
`;

const LogoDiv = styled.div`
  width: 10rem;
  height: 3rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  padding: 2rem;
`;

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />

      <CenterDiv>
        <LogoDiv>
          <img src={ThingsLogo} alt="" />
        </LogoDiv>
        <ContentDiv>
          <ThemeBorder>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/todolist" exact component={Todolist} />
            </Switch>
          </ThemeBorder>
        </ContentDiv>
      </CenterDiv>
    </>
  );
};

export default Layout;

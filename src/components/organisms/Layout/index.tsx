import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Todolist from 'pages/Todolist';
import ThingsLogo from 'assets/images/things_logo.png';

const ContentDiv = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  position: absolute;
  left: 5rem;
`;

const LogoDiv = styled.div`
  width: 10rem;
  padding: 1rem 0;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <ContentDiv>
        <LogoDiv>
          <img src={ThingsLogo} alt="" />
        </LogoDiv>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/todolist" exact component={Todolist} />
        </Switch>
      </ContentDiv>
    </>
  );
};

export default Layout;

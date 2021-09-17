import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AuthContextProvider } from 'contexts/AuthContext';
import NavBar from 'components/organisms/NavBar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Todolist from 'pages/Todolist';
import Login from 'pages/Login';
import ThemeBorder from 'components/atoms/ThemeBorder';
import ThingsLogo2 from 'assets/images/things_logo2.png';

const CenterDiv = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  position: absolute;
  left: 5rem;
`;

const LogoDiv = styled.div`
  width: 50%;
  height: 4rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: auto;
    height: 60%;
  }
`;

const ContentDiv = styled.div`
  width: 80%;
  height: calc(100% - 3rem);
  padding: 1rem 2rem 3rem 2rem;
  margin: 0 auto;
`;

const Layout: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />

      <CenterDiv>
        <LogoDiv
          onClick={() => history.push('/home')}
          style={{ cursor: 'pointer' }}
        >
          <img src={ThingsLogo2} alt="" />
        </LogoDiv>
        <ContentDiv>
          <ThemeBorder>
            <AuthContextProvider>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/todolist" exact component={Todolist} />
                <Route path="/login" exact component={Login} />
              </Switch>
            </AuthContextProvider>
          </ThemeBorder>
        </ContentDiv>
      </CenterDiv>
    </>
  );
};

export default Layout;

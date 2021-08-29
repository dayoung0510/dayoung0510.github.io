import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Todolist from 'pages/Todolist';

const Layout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/todolist" exact component={Todolist} />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;

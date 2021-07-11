import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Theme, seoul1991, darkTheme } from 'styles/theme';
import GlobalStyle from 'styles/globalStyles';
import useDarkMode from 'components/organisms/Layout/useDarkMode';
import Cover from 'pages/Cover';
import Layout from 'components/organisms/Layout';
import Home from 'pages/Home';

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: seoul1991,
  toggleTheme: () => {
    return null;
  },
});

const App: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle theme={theme === seoul1991 ? seoul1991 : darkTheme} />
        <Switch>
          <Route path="/" exact component={Cover} />
          <Layout>
            <Route path="/home" exact component={Home} />
          </Layout>
        </Switch>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

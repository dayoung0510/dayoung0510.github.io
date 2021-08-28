import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';
import { Theme, defaultValue } from 'styles/theme';
import useTheme from 'hooks/useTheme';
import Cover from 'pages/Cover';
import Layout from 'components/organisms/Layout';
import Home from 'pages/Home';

interface ContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ContextProps>({
  theme: defaultValue,
  setTheme: () => {},
});

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  console.log('app에서', theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={theme} />
      <Switch>
        <Route path="/" exact component={Cover} />
        <Layout>
          <Route path="/home" exact component={Home} />
        </Layout>
      </Switch>
    </ThemeContext.Provider>
  );
};

export default App;

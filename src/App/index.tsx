import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';
import { Theme, defaultValue } from 'styles/theme';
import useTheme from 'hooks/useTheme';
import Cover from 'pages/Cover';
import Layout from 'components/organisms/Layout';
import Home from 'pages/Home';
import { AuthProvider } from 'contexts/AuthContext';

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthProvider>
        <GlobalStyle theme={theme} />
        <Switch>
          <Route path="/" exact component={Cover} />
          <Layout>
            <Route path="/home" exact component={Home} />
          </Layout>
        </Switch>
      </AuthProvider>
    </ThemeContext.Provider>
  );
};

export default App;

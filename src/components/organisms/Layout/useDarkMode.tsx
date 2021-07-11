import { useEffect, useState } from 'react';
import { seoul1991, darkTheme, Theme } from 'styles/theme';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(seoul1991);

  const setMode = (mode: Theme) => {
    switch (mode) {
      case seoul1991:
        return window.localStorage.setItem('theme', 'seoul1991');

      case darkTheme:
        return window.localStorage.setItem('theme', 'darkMode');

      default:
        break;
    }
    console.log(mode);
    return setTheme(mode);
  };
  // mode === seoul1991
  //   ? window.localStorage.setItem('theme', 'seoul1991')
  //   : window.localStorage.setItem('theme', 'dark');
  // setTheme(mode);

  const toggleTheme = () =>
    theme === seoul1991 ? setMode(seoul1991) : setMode(darkTheme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      if (localTheme === 'seoul1991') {
        setTheme(seoul1991);
      } else {
        setTheme(darkTheme);
      }
    }
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;

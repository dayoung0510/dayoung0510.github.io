import { useEffect, useState } from 'react';
import { ThemeContext } from 'App';
import {
  Theme,
  seoul1991,
  vintageUSA,
  neonHK,
  defaultValue,
} from '../styles/theme';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(seoul1991);

  const setMode = (mode: Theme) => {
    console.log('셋모드');
    setTheme(mode);
    return mode === seoul1991
      ? window.localStorage.setItem('theme', 'seoul1991')
      : window.localStorage.setItem('theme', 'vintageUSA');
  };

  const changeTheme = () => {
    return theme === seoul1991 ? setMode(vintageUSA) : setMode(seoul1991);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    // if (localTheme !== null) {
    // if (localTheme === 'seoul1991') {
    //   setTheme(seoul1991);
    // } else {
    //   setTheme(vintageUSA);
    // }
    // }
  }, []);

  return { theme, changeTheme };
};

export default useTheme;

import { useEffect, useState } from 'react';
import {
  Theme,
  seoul1991,
  vintageUSA,
  neonHK,
  defaultValue,
} from '../styles/theme';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(defaultValue);

  const changeTheme = () => {
    setTheme(theme);
    console.log('체체체체첸지', theme);
  };
  return { theme, changeTheme };
};

export default useTheme;

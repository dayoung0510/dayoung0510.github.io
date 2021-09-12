import { useEffect, useState } from 'react';
import { Theme, defaultValue, BackgroundImgs } from '../styles/theme';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(defaultValue);

  const localTheme = window.localStorage.getItem('theme');
  useEffect(() => {
    if (localTheme === null) {
      window.localStorage.setItem('theme', BackgroundImgs[0].title);
    }
    setTheme(BackgroundImgs.find((i) => i.title === localTheme)!.theme);
  }, [localTheme]);

  return { theme, setTheme };
};

export default useTheme;

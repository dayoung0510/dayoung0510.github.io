import React from 'react';
import styled, { css, FlattenInterpolation } from 'styled-components';
import useTheme from 'hooks/useTheme';

type ThemeBorderType = {
  theme: string;
};

const Border = styled.div<ThemeBorderType>`
  width: 100%;
  height: 100%;
  padding: 2rem;

  border-width: 3px 3px 5px 5px;
  border-radius: 3% 92% 3% 95%/95% 4% 94% 5%;
  transform: rotate(-1deg);
  background: #fffff0;
  border: solid black;
  border-color: #222;
  overflow: auto;
`;

const CenterBorder: React.FC = ({ children }) => {
  const { theme } = useTheme();

  console.log(theme.title);

  return <Border>{children}</Border>;
};

export default CenterBorder;

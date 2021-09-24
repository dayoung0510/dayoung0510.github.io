import React from 'react';
import styled, { css } from 'styled-components';
import useTheme from 'hooks/useTheme';

const selectThemeBorder = (theme: string) => {
  switch (theme) {
    case 'cartoonNight':
      return css`
        border-width: 3px 3px 5px 5px;
        border-radius: 3% 30% 3% 25%/95% 4% 94% 5%;
        background: #eeeeda;
        border: solid black;
        border-color: #222;
        overflow: auto;
      `;

    case 'vintageUSA':
      return css`
        border: 2rem solid #469bb0;
        border-radius: 4rem;
        background-color: #f2f2f2;
      `;

    default:
      return css``;
  }
};

const Border = styled.div<{ themeBorder: string }>`
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;

  ${({ themeBorder }) => selectThemeBorder(themeBorder)}
`;

const ThemeBorder: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return <Border themeBorder={theme.title}>{children}</Border>;
};

export default ThemeBorder;

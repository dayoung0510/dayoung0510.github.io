import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'App';
import { BackgroundImgs } from 'styles/theme';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeVideo from 'assets/images/tree_video2.mp4';
import { WholeDiv, CircleButton, ArrowDiv, Video } from './styles';

type Props = {
  stage: number;
};

const CenterDiv = styled.div<Props>`
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  ${({ stage }) => css`
    background-image: url(${BackgroundImgs[stage].src});
  `}
`;

const Cover: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);

  const maxStage = BackgroundImgs.length - 1;

  const handlePage = (addValue: number) => {
    setState((prev) => {
      const newState =
        (prev + addValue) % BackgroundImgs.length < 0
          ? maxStage
          : (prev + addValue) % BackgroundImgs.length;
      return newState;
    });
  };

  const setLocal = (item: string) => {
    window.localStorage.setItem('theme', item);
  };

  useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      window.localStorage.setItem('theme', BackgroundImgs[state].title);
    } else {
      setLocal(BackgroundImgs[state].title);
      setTheme(BackgroundImgs[state].theme);
    }
  }, [state, setTheme]);

  return (
    <WholeDiv>
      {BackgroundImgs[state].type === 'video' && (
        <Video loop autoPlay muted>
          <source src={TreeVideo} type="video/mp4" />
          <track src="" kind="captions" label="captions" />
        </Video>
      )}

      <ArrowDiv style={{ left: 0 }}>
        <ArrowLeftIcon
          onClick={() => {
            handlePage(-1);
          }}
        />
      </ArrowDiv>

      <CenterDiv stage={state}>
        <CircleButton onClick={() => history.push('/home')}>
          {BackgroundImgs[state].title}
        </CircleButton>
      </CenterDiv>

      <ArrowDiv style={{ right: 0 }}>
        <ArrowRightIcon
          onClick={() => {
            handlePage(1);
          }}
        />
      </ArrowDiv>
    </WholeDiv>
  );
};

export default Cover;

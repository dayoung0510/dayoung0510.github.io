import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LeftDiv = styled.div`
  position: absolute;
  height: 100vh;
  width: 5rem;
  left: 0;
  padding: 2rem 0;
`;

const RightDiv = styled.div`
  position: absolute;
  height: 100vh;
  width: 5rem;
  right: 0;
  padding: 2rem 0;
`;

const ButtonDiv = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <LeftDiv>
        <ButtonDiv>
          <button type="button" onClick={() => history.push('/')}>
            커버
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button type="button" onClick={() => history.push('/home')}>
            홈
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button type="button" onClick={() => history.push('/profile')}>
            프로필
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button type="button" onClick={() => history.push('/todolist')}>
            투두(버킷)리스트
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button type="button">다이어리</button>
        </ButtonDiv>
        <ButtonDiv>
          <button type="button">작업물(포폴)</button>
        </ButtonDiv>
      </LeftDiv>
      <RightDiv>
        <ButtonDiv>
          <button type="button">sdf</button>
        </ButtonDiv>
      </RightDiv>
    </>
  );
};

export default NavBar;

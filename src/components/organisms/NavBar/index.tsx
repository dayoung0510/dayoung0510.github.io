import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <div style={{ display: 'flex' }}>
      <button type="button" onClick={() => history.push('/')}>
        커버
      </button>
      <button type="button" onClick={() => history.push('/home')}>
        홈
      </button>
      <button type="button" onClick={() => history.push('/profile')}>
        프로필
      </button>
      <button type="button" onClick={() => history.push('/todolist')}>
        투두(버킷)리스트
      </button>
      <button type="button">다이어리</button>
      <button type="button">캘린더(옛날서울달력)</button>
      <button type="button">작업물(포폴)</button>
    </div>
  );
};

export default NavBar;

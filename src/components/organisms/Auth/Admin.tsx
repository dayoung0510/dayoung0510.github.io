import React from 'react';
import { useAuth } from 'contexts/AuthContext';

const Admin: React.FC = () => {
  const { user, logOut } = useAuth();

  if (!user) {
    <div>로그인 정보가 없습니다.</div>;
  }
  return (
    <div>
      {user?.email}로 로그인 되었습니다.
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button type="button" onClick={() => logOut()}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Admin;

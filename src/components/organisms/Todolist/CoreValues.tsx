import React from 'react';
import { useAuthContext } from 'contexts/AuthContext';

const CoreValues: React.FC = () => {
  const { user } = useAuthContext();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {user ? <>코어밸류</> : <>관리자만 접근 가능합니다</>}
    </div>
  );
};

export default CoreValues;

import React from 'react';
import { useAuthContext } from 'contexts/AuthContext';

const BucketList: React.FC = () => {
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
      {user ? <>버킷리스트</> : <>관리자만 접근 가능합니다</>}
    </div>
  );
};

export default BucketList;

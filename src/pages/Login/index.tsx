import React from 'react';
import SignIn from 'components/organisms/Auth/SignIn';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';
import { useAuthContext } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>
        {user ? (
          <div>
            <div>이미 로그인되었습니다</div>
            <div>
              <button type="button">로그아웃</button>
            </div>
          </div>
        ) : (
          <SignIn />
        )}
      </FlexColumn>
    </FlexBoth>
  );
};

export default Login;

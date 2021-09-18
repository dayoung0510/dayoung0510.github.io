import React from 'react';
import SignIn from 'components/organisms/Auth/SignIn';
import { supabase } from 'supabaseClient';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';
import { useAuthContext } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>
        {user ? (
          <div>
            <div>{user.email}</div>
            <div>로그인되었습니다</div>
            <div>
              <button type="button" onClick={() => supabase.auth.signOut()}>
                로그아웃
              </button>
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

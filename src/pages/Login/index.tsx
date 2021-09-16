import React from 'react';
import SignUp from 'components/organisms/Auth/SignUp';
import SignIn from 'components/organisms/Auth/SignIn';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';
import { useAuthContext } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>{user ? <div>로그인되었습니다</div> : <SignIn />}</FlexColumn>
    </FlexBoth>
  );
};

export default Login;

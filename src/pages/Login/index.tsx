import React from 'react';
import SignIn from 'components/organisms/Auth/SignIn';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';
import { useAuth } from 'contexts/AuthContext';

const Login: React.FC = () => {
  const user = useAuth();
  console.log(user);
  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>
        <SignIn />
      </FlexColumn>
    </FlexBoth>
  );
};

export default Login;

import React from 'react';
import SignIn from 'components/organisms/Auth/SignIn';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';

const Login: React.FC = () => {
  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>
        <SignIn />
      </FlexColumn>
    </FlexBoth>
  );
};

export default Login;

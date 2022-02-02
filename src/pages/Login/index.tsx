import React from 'react';
import LogIn from 'components/organisms/Auth/LogIn';
import { FlexBoth, FlexColumn } from 'components/atoms/commons/Divs';

const Login: React.FC = () => {
  return (
    <FlexBoth style={{ height: '100%' }}>
      <FlexColumn>
        <LogIn />
      </FlexColumn>
    </FlexBoth>
  );
};

export default Login;

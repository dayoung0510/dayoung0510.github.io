import React, { useState } from 'react';
import SignUp from 'components/organisms/Auth/SignUp';

const SignIn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenToggle = (state: boolean) => (): void => {
    setOpen(state);
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        관리자등록
      </button>

      <SignUp open={open} handleClose={handleOpenToggle(false)} />
    </>
  );
};

export default SignIn;

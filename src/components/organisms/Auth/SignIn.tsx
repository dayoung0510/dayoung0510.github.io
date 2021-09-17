import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import SignUp from 'components/organisms/Auth/SignUp';

const SignIn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenToggle = (state: boolean) => (): void => {
    setOpen(state);
  };

  const emailRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <TextField
          id="email"
          variant="standard"
          margin="dense"
          label="이메일주소"
          ref={emailRef}
        />
      </div>
      <div>
        <TextField
          id="password"
          variant="standard"
          margin="dense"
          label="비밀번호"
          type="password"
          ref={passwordRef}
        />
      </div>
      <button type="button">로그인</button>
      <button type="button" onClick={() => setOpen(true)}>
        관리자등록
      </button>

      <SignUp open={open} handleClose={handleOpenToggle(false)} />
    </>
  );
};

export default SignIn;

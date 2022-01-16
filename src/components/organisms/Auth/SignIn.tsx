import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import SignUp from 'components/organisms/Auth/SignUp';

const SignIn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpenToggle = (state: boolean) => (): void => {
    setOpen(state);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert(`제출하깅`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="email"
            variant="standard"
            margin="dense"
            label="이메일주소"
            inputRef={emailRef}
          />
        </div>
        <div>
          <TextField
            id="password"
            variant="standard"
            margin="dense"
            label="비밀번호"
            type="password"
            inputRef={passwordRef}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
      <button type="button" onClick={() => setOpen(true)}>
        관리자등록요청
      </button>

      <SignUp open={open} handleClose={handleOpenToggle(false)} />
    </>
  );
};

export default SignIn;

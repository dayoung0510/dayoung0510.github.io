import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import SignUp from 'components/organisms/Auth/SignUp';
import { supabase } from 'supabaseClient';

const SignIn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpenToggle = (state: boolean) => (): void => {
    setOpen(state);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) {
        alert('유효하지 않은 아이디 또는 패스워드입니다');
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
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

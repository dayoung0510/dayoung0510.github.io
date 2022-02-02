import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SignUp from 'components/organisms/Auth/SignUp';
import { useAuth } from 'contexts/AuthContext';
import Admin from 'components/organisms/Auth/Admin';

const LogIn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenToggle = (state: boolean) => (): void => {
    setOpen(state);
  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const { user, logIn } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn(email, pw);
  };

  return (
    <>
      {user === null ? (
        <>
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <div>
              <TextField
                id="email"
                variant="standard"
                margin="dense"
                label="이메일주소"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="password"
                variant="standard"
                margin="dense"
                label="비밀번호"
                type="password"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
            <div style={{ margin: '1rem 0' }}>
              <button type="submit">로그인</button>
            </div>
          </form>
          <div>
            <button type="button" onClick={() => setOpen(true)}>
              관리자등록요청
            </button>
          </div>
        </>
      ) : (
        <Admin />
      )}

      <SignUp open={open} handleClose={handleOpenToggle(false)} />
    </>
  );
};

export default LogIn;

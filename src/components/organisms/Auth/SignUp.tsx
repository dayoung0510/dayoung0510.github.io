import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { supabase } from '../../../supabaseClient';

type DialogProps = {
  open: boolean;
  handleClose: () => void;
};

const SignUpComponent: React.FC<DialogProps> = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert('현재 새로운 관리자는 등록이 불가합니다');
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <DialogTitle>관리자 등록 요청</DialogTitle>
        <DialogContent>
          <TextField
            id="email"
            fullWidth
            variant="standard"
            margin="dense"
            label="이메일주소"
            required
            inputRef={emailRef}
          />
          <TextField
            id="password"
            fullWidth
            variant="standard"
            margin="dense"
            label="비밀번호(12자리 이상, 영문 대소문자, 특수문자 포함 필수)"
            type="password"
            required
            inputRef={passwordRef}
          />

          <TextField
            id="password2"
            fullWidth
            variant="standard"
            margin="dense"
            required
            label="비밀번호확인(12자리 이상, 영문 대소문자, 특수문자 포함 필수)"
            type="password"
          />
        </DialogContent>

        <DialogActions>
          <Button type="submit" disabled={loading}>
            {loading ? <span>Loading</span> : <span>전송</span>}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignUpComponent;

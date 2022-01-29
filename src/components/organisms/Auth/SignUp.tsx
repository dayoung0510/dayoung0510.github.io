import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth } from 'contexts/AuthContext';

type DialogProps = {
  open: boolean;
  handleClose: () => void;
};

const SignUpComponent: React.FC<DialogProps> = ({ open, handleClose }) => {
  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(email, pw);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <DialogTitle>관리자 등록 요청</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="standard"
            margin="dense"
            label="이메일주소"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="dense"
            label="비밀번호(12자리 이상, 영문 대소문자, 특수문자 포함 필수)"
            type="password"
            required
            onChange={(e) => setPw(e.target.value)}
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
          <Button type="submit">
            {loading ? <span>Loading</span> : <span>전송</span>}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignUpComponent;

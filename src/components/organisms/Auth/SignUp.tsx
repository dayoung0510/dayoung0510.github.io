import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { supabase } from '../../../supabaseClient';

type DialogProps = {
  open: boolean;
  handleClose: () => void;
};

const SignUp: React.FC<DialogProps> = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>관리자 등록 요청</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          placeholder="관리자 이메일 등록"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(inputEmail);
          }}
          disabled={loading}
        >
          {loading ? <span>Loading</span> : <span>전송</span>}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;

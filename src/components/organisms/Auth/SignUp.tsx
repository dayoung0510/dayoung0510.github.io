import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/atoms/commons/Button';
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

type SignUpFormData = {
  email: string;
  password: string;
  passwordCheck: string;
};

const SignUpComponent: React.FC<DialogProps> = ({ open, handleClose }) => {
  const { signUp } = useAuth();

  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    mode: 'onChange',
  });
  watch('password');
  const { password: watchedPassword } = getValues();

  const onSubmit = ({ email, password }: SignUpFormData) => {
    signUp(email, password);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>관리자 등록 요청</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="standard"
            margin="dense"
            label="이메일주소"
            required
            {...register('email')}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="dense"
            label="비밀번호"
            type="password"
            required
            {...register('password')}
          />

          <TextField
            id="password2"
            fullWidth
            variant="standard"
            margin="dense"
            required
            label="비밀번호확인"
            type="password"
            {...register('passwordCheck', {
              validate: (value) =>
                value === watchedPassword || '비밀번호가 일치하지 않습니다',
            })}
          />
          {errors.passwordCheck && <div>{errors.passwordCheck.message}</div>}
        </DialogContent>

        <DialogActions>
          <Button type="submit" disabled={!isValid}>
            전송
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignUpComponent;

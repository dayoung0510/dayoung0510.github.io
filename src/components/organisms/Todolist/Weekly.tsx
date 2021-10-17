import React, { useState } from 'react';
import { useTodoContext } from 'contexts/TodoContext';

const Weekly: React.FC = () => {
  const [state, setState] = useState('');
  const { dispatch } = useTodoContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: 'CREATE_CAT', name: state });
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} />
      <button type="submit">확인</button>
    </form>
  );
};

export default Weekly;

import React, { useState } from 'react';
import { useTodoContext } from '../../../contexts/TodoContext';

const ManageCategories: React.FC = () => {
  const [createCategory, setCreateCategory] = useState('');
  const { dispatch } = useTodoContext();

  const onSubmit = () => {
    dispatch({ type: 'CREATE_CAT', catTitle: createCategory });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategory(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} />
        <button type="submit">확인</button>
      </form>
    </>
  );
};

export default ManageCategories;

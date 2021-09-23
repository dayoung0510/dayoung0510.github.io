import React from 'react';
import Yearly from 'components/organisms/Todolist/yearly';
import Monthly from 'components/organisms/Todolist/monthly';
import { useAuthContext } from 'contexts/AuthContext';

const Todolist: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user?.email}
      <Monthly />
      <Yearly />
    </div>
  );
};

export default Todolist;

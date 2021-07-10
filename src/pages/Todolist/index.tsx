import React from 'react';
import Yearly from 'components/organisms/Todolist/yearly';
import Monthly from 'components/organisms/Todolist/monthly';

const Todolist: React.FC = () => {
  return (
    <div>
      <Monthly />
      <Yearly />
    </div>
  );
};

export default Todolist;

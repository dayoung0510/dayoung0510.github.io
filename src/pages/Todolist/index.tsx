import React from 'react';
import TodoContextProvider from 'contexts/TodoContext';
import TodoPanel from 'components/organisms/Todolist/TodoPanel';

const Todolist: React.FC = () => {
  return (
    <TodoContextProvider>
      <TodoPanel />
    </TodoContextProvider>
  );
};

export default Todolist;

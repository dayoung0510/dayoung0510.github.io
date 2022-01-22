import React from 'react';
import TodoContextProvider from 'contexts/todoContext';
import TodoPanel from 'components/organisms/Todolist/TodoPanel';

const Todolist: React.FC = () => {
  return (
    <TodoContextProvider>
      <TodoPanel />
    </TodoContextProvider>
  );
};

export default Todolist;

import React, { createContext, useContext, useReducer } from 'react';

type StateType = { name: string };

const defaultState: StateType = { name: '' };

const TodoContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: defaultState, dispatch: () => {} });

export const useTodoContext = () => useContext(TodoContext);

type ActionType = { type: 'CREATE_CAT'; name: string } | { type: 'INITIALIZE' };

const reducer = (state: StateType, action: ActionType) => {
  const { name } = state;
  switch (action.type) {
    case 'INITIALIZE':
      return { ...state };

    case 'CREATE_CAT':
      alert(name);
      return { ...state };

    default: {
      return state;
    }
  }
};

const TodoContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

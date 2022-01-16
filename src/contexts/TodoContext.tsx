import React, { createContext, useContext, useReducer } from 'react';

type StateType = { catTitle: string };

const defaultState: StateType = { catTitle: '' };

const TodoContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: defaultState, dispatch: () => {} });

export const useTodoContext = () => useContext(TodoContext);

type ActionType =
  | { type: 'CREATE_CAT'; catTitle: string }
  | { type: 'INITIALIZE' };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'INITIALIZE': {
      return { ...state };
    }

    case 'CREATE_CAT': {
      console.log('카테고리 만들기');
      return { ...state };
    }
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

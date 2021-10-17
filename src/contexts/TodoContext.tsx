import React, { createContext, useContext, useReducer } from 'react';
import { supabase } from 'supabaseClient';

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
      const { catTitle: title } = action;
      const createCategory = async () => {
        try {
          const { error } = await supabase
            .from('categories')
            .insert({ title }, { returning: 'minimal' });

          if (error) {
            throw new Error('Err!');
          }
        } catch (error) {
          alert(error);
        }
      };
      createCategory();
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

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../firebase';

type StateType = { user: FirebaseUser | null };

const defaultState: StateType = { user: null };

type ActionType =
  | { type: 'SIGN_UP'; value: { email: string; password: string } }
  | { type: 'SIGN_IN'; value: { email: string; password: string } }
  | { type: 'LOGOUT' }
  | { type: 'RESET_PASSWORD'; email: string };

const AuthContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: defaultState, dispatch: () => {} });

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider',
    );
  }
  return context;
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SIGN_UP': {
      const { email, password } = action.value;
      createUserWithEmailAndPassword(auth, email, password);
      return { ...state };
    }

    case 'SIGN_IN': {
      const { email, password } = action.value;
      signInWithEmailAndPassword(auth, email, password);
      return { ...state };
    }

    case 'LOGOUT': {
      signOut(auth);
      return state;
    }

    case 'RESET_PASSWORD': {
      const { email } = action;
      sendPasswordResetEmail(auth, email);
      return state;
    }

    default: {
      return state;
    }
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

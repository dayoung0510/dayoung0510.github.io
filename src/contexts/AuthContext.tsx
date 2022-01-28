import React, { useState, useEffect, createContext, useContext } from 'react';
import { firebaseInstance } from '../firebase';

type User = firebase.default.User | null;
type ContextState = { user: User };

const AuthContext = createContext<ContextState | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = firebaseInstance.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider',
    );
  }
  return context.user;
};

export { AuthProvider, useAuth };

import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext<{
  user: FirebaseUser | null;
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: () => void;
}>({
  user: null,
  logIn: () => {},
  signUp: () => {},
  logOut: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider',
    );
  }

  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const logIn = (email: string, password: string) => {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    alert('로그아웃 되었습니다.');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log('Auth', currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

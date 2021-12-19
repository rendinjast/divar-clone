import { createContext, useContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import firebase from '../services/firebase';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    isLoading: true,
    user: null,
  });
  const { userData } = useAuth();
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(
      async (user) => {
        if (user) {
          setCurrentUser({ isLoading: false, user });
        } else {
          setCurrentUser({ isLoading: false, user: null });
        }
      },
      (error) => console.log(error)
    );
    return () => unSubscribe();
  }, []);
  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

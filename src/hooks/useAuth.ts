import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const { user, signInWithGoogle } = useContext(AuthContext);

  return { user, signInWithGoogle };
};

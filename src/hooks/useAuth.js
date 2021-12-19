import { TOAST_ERROR, TOAST_SUCCESS } from '../constants/notifyTypes';
import firebase from '../services/firebase';
import useFirestore from './useFirestore';
import useToast from './useToast';

const useAuth = () => {
  const { addToast } = useToast();
  const { addData } = useFirestore();

  const signUp = async (email, name, password) => {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

      await res.user.updateProfile({ displayName: name });
      await addData('users', {
        email,
        displayName: name,
        id: res.user.uid,
        theme: 'light-theme',
        pic: '',
      });
      addToast(TOAST_SUCCESS, 'Your account created successfully.');
    } catch (error) {
      console.log(error);
      addToast(TOAST_ERROR, error.message);
    }
  };
  const signIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      addToast(TOAST_SUCCESS, 'You successfully logged in');
    } catch (error) {
      addToast(TOAST_ERROR, error.message);
    }
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      addToast(TOAST_SUCCESS, 'You Signed Out');
    } catch (error) {
      addToast(TOAST_ERROR, error.message);
    }
  };
  const userData = async (id) => {
    try {
      const user = await firebase.firestore().collection('users').where('id', '==', id).get();
      return user.docs[0].data();
    } catch (error) {
      console.log(error);
    }
  };
  return { signUp, signIn, signOut, userData };
};
export default useAuth;

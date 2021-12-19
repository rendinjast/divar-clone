import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA4UxGDzvZy02DKi0z8Nr8frsWgPopBGrY',
  authDomain: 'divar-3bf23.firebaseapp.com',
  projectId: 'divar-3bf23',
  storageBucket: 'divar-3bf23.appspot.com',
  messagingSenderId: '355001206633',
  appId: '1:355001206633:web:84fab709aa98d0a9ab1ff8',
};

firebase.initializeApp(firebaseConfig);
export default firebase;

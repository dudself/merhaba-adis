import * as firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1tD-937AtGyYnE_A1Cf9tx74oUiL2jUw',
  authDomain: 'merhaba-adis.firebaseapp.com',
  databaseURL: 'https://merhaba-adis.firebaseio.com',
  projectId: 'merhaba-adis',
  storageBucket: 'merhaba-adis.appspot.com',
  messagingSenderId: '41231347524',
  appId: '1:41231347524:android:17598f400485377ad07111',
};

initializeApp(firebaseConfig);

export default firebase;

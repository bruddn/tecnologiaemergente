import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCoRyA43MaGvCNqq8Ra8lDCmkCm19e_9lg",
  authDomain: "teste-a1ca5.firebaseapp.com",
  databaseURL: "https://teste-a1ca5-default-rtdb.firebaseio.com",
  projectId: "teste-a1ca5",
  storageBucket: "teste-a1ca5.appspot.com",
  messagingSenderId: "56602864709",
  appId: "1:56602864709:web:8a10ba04868c7f303e072c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
